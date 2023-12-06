package com.example.csse_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.AutoCompleteTextView
import android.widget.Toast
import com.example.csse_mobile.databinding.ActivityScheduleBusBinding
import com.example.csse_mobile.interfaces.WalletInterface
import okhttp3.ResponseBody
import org.json.JSONException
import org.json.JSONObject
import retrofit2.Retrofit

class schedule_bus : AppCompatActivity() {
    private lateinit var binding: ActivityScheduleBusBinding


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityScheduleBusBinding.inflate(layoutInflater)
        setContentView(binding.root)

        getBalance()

        binding.btnCancelS.setOnClickListener {
            intent = Intent(this, customer_dashboard::class.java)
            startActivity(intent)
        }
        binding.btnPay.setOnClickListener {
            intent = Intent(this, schedule_bus_QR::class.java)
            startActivity(intent)
        }
        binding.btntopup.setOnClickListener {
            intent = Intent(this, wallet_topup::class.java)
            startActivity(intent)
        }

        val bus = listOf("Malabe", "Kottawa", "Nugegoda", "Kaduwela", "Thalawathugoda")

        val autoComplete: AutoCompleteTextView = binding.editFrom
        val autoComplete2: AutoCompleteTextView = binding.editTo

        val adapter = ArrayAdapter(this, R.layout.list_bus, bus)

        autoComplete.setAdapter(adapter)
        autoComplete.onItemClickListener =
            AdapterView.OnItemClickListener { adapterView, view, i, l ->
                val selectedBus = adapterView.getItemAtPosition(i)
                Toast.makeText(applicationContext, "Selected bus: $selectedBus", Toast.LENGTH_SHORT)
                    .show()
                calculateFee("Malabe", "Kottawa")
            }
        autoComplete2.setAdapter(adapter)
        autoComplete2.onItemClickListener =
            AdapterView.OnItemClickListener { adapterView, view, i, l ->
                val selectedBus = adapterView.getItemAtPosition(i)
                Toast.makeText(applicationContext, "Selected bus: $selectedBus", Toast.LENGTH_SHORT)
                    .show()
                calculateFee("Malabe", "Kottawa")
            }
    }

    fun calculateFee(s: String, s1: String) {
        val from = binding.editFrom.text.toString()
        val to = binding.editTo.text.toString()
        val fee = when (from) {
            "Malabe" -> when (to) {
                "Kottawa" -> 14 * 10
                "Nugegoda" -> 12 * 10
                "Kaduwela" -> 4 * 10
                else -> 0
            }
            "Kottawa" -> when (to) {
                "Malabe" -> 14 * 10
                "Nugegoda" -> 10 * 10
                "Kaduwela" -> 12 * 10
                else -> 0
            }
            "Nugegoda" -> when (to) {
                "Malabe" -> 12 * 10
                "Kottawa" -> 10 * 10
                "Kaduwela" -> 8 * 10
                else -> 0
            }
            "Kaduwela" -> when (to) {
                "Malabe" -> 4 * 10
                "Kottawa" -> 12 * 10
                "Nugegoda" -> 8 * 10
                else -> 0
            }
            else -> 0
        }
        binding.estimatedtxt.text = "Estimated Fee: LKR $fee"
    }



    private fun getBalance() {
        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.24.1:3000/ticketing/")
            .build()
        val call = retrofit.create(WalletInterface::class.java).getWallet(10)

        call.enqueue(object : retrofit2.Callback<ResponseBody> {
            override fun onResponse(call: retrofit2.Call<ResponseBody>, response: retrofit2.Response<ResponseBody>) {
                if (response.isSuccessful) {
                    try {
                        val responseBody = response.body()?.string() // Convert the response to a string
                        val json = JSONObject(responseBody) // Parse the JSON

                        // Extract the balance from the JSON
                        val balance = json.optInt("balance", -1)

                        if (balance != -1) {
                            val message = "Your balance is Rs. $balance"
                            binding.balancetxt.text = message
                        } else {
                            Toast.makeText(applicationContext, "Failed to retrieve balance", Toast.LENGTH_SHORT).show()
                        }
                    } catch (e: JSONException) {
                        Toast.makeText(applicationContext, "Error parsing JSON", Toast.LENGTH_SHORT).show()
                    }
                } else {
                    Toast.makeText(applicationContext, "Failed to retrieve details", Toast.LENGTH_SHORT).show()
                    Log.d("Error", response.code().toString())
                }
            }

            override fun onFailure(call: retrofit2.Call<ResponseBody>, t: Throwable) {
                Toast.makeText(applicationContext, "Error", Toast.LENGTH_SHORT).show()
            }
        })

    }
    }


