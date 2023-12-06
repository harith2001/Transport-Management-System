package com.example.csse_mobile

import android.app.DatePickerDialog
import android.content.Intent
import android.media.Image
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.csse_mobile.databinding.ActivityCustomerForeignRegisterBinding
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import android.util.Log
import android.widget.ImageButton
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import com.example.csse_mobile.interfaces.FCustomerInterface
import com.example.csse_mobile.models.CustomerForeign
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Locale

class customer_foreign_register : AppCompatActivity() {
    lateinit var binding: ActivityCustomerForeignRegisterBinding
    lateinit var tvDate11 : TextView
    lateinit var tvDate22 : TextView
    lateinit var btnDate1 : ImageView
    lateinit var btnDate2 : ImageView
    private val calendar = Calendar.getInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCustomerForeignRegisterBinding.inflate(layoutInflater)
        setContentView(binding.root)

        tvDate11 = binding.editarrivalF
        tvDate22 = binding.editdepatureF
        btnDate1 = binding.btnCalA
        btnDate2 = binding.btnCalD

        binding.btnCancelF.setOnClickListener{
            intent = Intent(this, customer_foreign_login::class.java)
            startActivity(intent)
        }
        binding.btnRegsiterF.setOnClickListener{
            onRegister()
        }
        btnDate1.setOnClickListener{
            showDatePicker1()
        }
        btnDate2.setOnClickListener{
            showDatePicker2()
        }



    }

    private fun showDatePicker2() {
        val datePickerDialog = DatePickerDialog(this,{DatePicker,year:Int,month:Int,day:Int ->
            val selectDate = Calendar.getInstance()
            selectDate.set(year,month,day)
            val dateFormat = SimpleDateFormat("yyyy-mm-dd", Locale.getDefault())
            val formatedDate = dateFormat.format(selectDate.time)
            tvDate22.text = formatedDate
        },calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH))

        datePickerDialog.show()
    }

    private fun showDatePicker1() {
        val datePickerDialog = DatePickerDialog(this,{DatePicker,year:Int,month:Int,day:Int ->
            val selectDate = Calendar.getInstance()
            selectDate.set(year,month,day)
            val dateFormat = SimpleDateFormat("yyyy-mm-dd", Locale.getDefault())
            val formatedDate = dateFormat.format(selectDate.time)
            tvDate11.text = formatedDate
        },calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH))

        datePickerDialog.show()
    }

     fun onRegister() {

        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.24.1:3000/ticketing/")
            .addConverterFactory(GsonConverterFactory.create()).build()

        val apiService = retrofit.create(FCustomerInterface::class.java)

        val customer = CustomerForeign(
            if (binding.editnameF.text.toString().isEmpty()){
                binding.editnameF.error = "Please enter your name"
                return
            }else{
                binding.editnameF.text.toString()
            },
            if (binding.editemailF.text.toString().isEmpty()){
                binding.editemailF.error = "Please enter your email"
                return
            }else{
                binding.editemailF.text.toString()
            },
            if (binding.editphoneF.text.toString().isEmpty()){
                binding.editphoneF.error = "Please enter your phone number"
                return
            }else{
                binding.editphoneF.text.toString()
            },
            if (binding.editpassportF.text.toString().isEmpty()){
                binding.editpassportF.error = "Please enter your passport number"
                return
            }else{
                binding.editpassportF.text.toString()
            },
            if (binding.editaddressF.text.toString().isEmpty()){
                binding.editaddressF.error = "Please enter your address"
                return
            }else{
                binding.editaddressF.text.toString()
            },
            if (binding.editpasswordF.text.toString().isEmpty()){
                binding.editpasswordF.error = "Please enter your password"
                return
            }else{
                binding.editpasswordF.text.toString()
            },
            if(binding.editarrivalF.text.toString().isEmpty()) {
                binding.editarrivalF.error = "Please enter your arrival date"
                return
            }else{
                binding.editarrivalF.text.toString()
            },
            if(binding.editdepatureF.text.toString().isEmpty()) {
                binding.editdepatureF.error = "Please enter your departure date"
                return
            }else{
                binding.editdepatureF.text.toString()
            },
        )
        Log.d("customer", customer.toString())

        val call = apiService.registerCustomer(customer)
        call.enqueue(object : Callback<ResponseBody>{
            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                if (response.isSuccessful) {
                    // Registration successful
                    Toast.makeText(applicationContext, "Registration successful", Toast.LENGTH_SHORT).show()

                    // Start the next activity or perform any other action
                    val intent = Intent(this@customer_foreign_register, customer_foreign_login::class.java)
                    startActivity(intent)
                } else {
                    // Registration failed
                    Toast.makeText(applicationContext, "Registration failed", Toast.LENGTH_SHORT).show()

                }
            }

            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                // Request failed
                Toast.makeText(applicationContext, "Request failed: " + t.message, Toast.LENGTH_SHORT).show()
            }
        })
    }


}