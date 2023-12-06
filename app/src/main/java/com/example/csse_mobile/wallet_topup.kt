package com.example.csse_mobile

import android.app.DatePickerDialog
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import com.example.csse_mobile.databinding.ActivityWalletTopupBinding
import com.example.csse_mobile.interfaces.WalletInterface
import com.example.csse_mobile.models.Wallet
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Locale

class wallet_topup : AppCompatActivity() {
    lateinit var binding: ActivityWalletTopupBinding
    private val calendar = Calendar.getInstance()
    lateinit var tvDate33 : TextView
    lateinit var btnDate33 : ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityWalletTopupBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnCancelW.setOnClickListener{
            finish()
        }
        binding.btnTop.setOnClickListener{
            onTopUp()
        }

        tvDate33 = binding.editDateEX
        btnDate33 = binding.btnEXp

        btnDate33.setOnClickListener{
            showDatePicker3()
        }


    }

    private fun showDatePicker3() {
        val datePickerDialog = DatePickerDialog(this,{DatePicker,year:Int,month:Int,day:Int ->
            val selectDate = Calendar.getInstance()
            selectDate.set(year,month,day)
            val dateFormat = SimpleDateFormat("yyyy-mm-dd", Locale.getDefault())
            val formatedDate = dateFormat.format(selectDate.time)
            tvDate33.text = formatedDate
        },calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH))

        datePickerDialog.show()
    }

    private fun onTopUp() {
        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.24.1:3000/ticketing/")
            .addConverterFactory(GsonConverterFactory.create()).build()

        val apiService = retrofit.create(WalletInterface::class.java)

        val topup = Wallet(
            if (binding.editAmount.text.toString().isEmpty()) {
                binding.editAmount.error = "Please enter your amount"
                return
            } else {
                binding.editAmount.text.toString().toDouble()
            },
            if (binding.editCardNo.text.toString().isEmpty()) {
                binding.editCardNo.error = "Please enter your card number"
                return
            } else {
                binding.editCardNo.text.toString()
            },
            if (binding.editCardName.text.toString().isEmpty()) {
                binding.editCardName.error = "Please enter your card name"
                return
            } else {
                binding.editCardName.text.toString()
            },
            if (binding.editCvv.text.toString().isEmpty()) {
                binding.editCvv.error = "Please enter your card CVV"
                return
            } else {
                binding.editCvv.text.toString()
            },
            if (binding.editDateEX.text.toString().isEmpty()) {
                binding.editDateEX.error = "Please enter your card expiry date"
                return
            } else {
                binding.editDateEX.text.toString()
            },
        )
        Log.d("Topup", topup.toString())

        val call = apiService.topupWallet(topup)

        call.enqueue(object : Callback<ResponseBody> {
            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Log.d("Response", response.toString())
                if (response.isSuccessful) {
                    // login successful
                    Toast.makeText(applicationContext, "Top Up successful", Toast.LENGTH_SHORT).show()
                    // Start the next activity or perform any other action
                    val intent = Intent(this@wallet_topup, schedule_bus::class.java)
                    startActivity(intent)
                } else {
                    // login failed
                    Toast.makeText(applicationContext, "Top Up failed ", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                // Request failed
                Toast.makeText(applicationContext, "Request failed: " + t.message, Toast.LENGTH_SHORT).show()
            }
        })

    }
}