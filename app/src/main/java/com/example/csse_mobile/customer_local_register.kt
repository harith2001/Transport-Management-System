package com.example.csse_mobile

import android.app.DatePickerDialog
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.csse_mobile.databinding.ActivityCustomerLocalRegisterBinding
import com.example.csse_mobile.interfaces.LCustomerInterface
import com.example.csse_mobile.models.CustomerLocal
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import android.util.Log
import android.widget.Button
import android.widget.DatePicker
import android.widget.ImageButton
import android.widget.TextView
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Locale


class customer_local_register : AppCompatActivity() {
    lateinit var binding: ActivityCustomerLocalRegisterBinding
    lateinit var  tvDate : TextView
    lateinit var btnDate : ImageButton
    private val calendar = Calendar.getInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCustomerLocalRegisterBinding.inflate(layoutInflater)
        setContentView(binding.root)

        tvDate = binding.editDOBL
        btnDate = binding.btnCal

        binding.btnCancel.setOnClickListener {
            val intent = Intent(this, customer_local_login::class.java)
            startActivity(intent)
        }
        binding.btnRegsiter.setOnClickListener {
            onRegister()
        }
        btnDate.setOnClickListener {
            showDatePicker()
        }


    }

    private fun showDatePicker() {
        val datePickerDialog = DatePickerDialog(this,{DatePicker,year:Int,month:Int,day:Int ->
            val selectDate = Calendar.getInstance()
            selectDate.set(year,month,day)
            val dateFormat = SimpleDateFormat("yyyy-mm-dd", Locale.getDefault())
            val formatedDate = dateFormat.format(selectDate.time)
            tvDate.text = formatedDate
        },calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH))

        datePickerDialog.show()
    }


    fun onRegister() {

        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.24.1:3000/ticketing/")// 192.168.24.1
            .addConverterFactory(GsonConverterFactory.create()).build()

        val apiService = retrofit.create(LCustomerInterface::class.java)

        val customer = CustomerLocal(
            if (binding.editnameL.text.toString().isEmpty()){
                binding.editnameL.error = "Please enter your name"
                return
            }else{
                binding.editnameL.text.toString()
            },
            if (binding.editemailL.text.toString().isEmpty()){
                binding.editemailL.error = "Please enter your email"
                return
            }else{
            binding.editemailL.text.toString()
            },
            if (binding.editphoneL.text.toString().isEmpty()){
                binding.editphoneL.error = "Please enter your phone number"
                return
            }else{
            binding.editphoneL.text.toString()
            },
            if (binding.editaddressL.text.toString().isEmpty()){
                binding.editaddressL.error = "Please enter your address"
                return
            }else{
                binding.editaddressL.text.toString()
            },
            if (binding.editnicL.text.toString().isEmpty()){
                binding.editnicL.error = "Please enter your NIC"
                return
            }else{
            binding.editnicL.text.toString()
            },
            if (binding.editpasswordL.text.toString().isEmpty()){
                binding.editpasswordL.error = "Please enter your password"
                return
            }else{
            binding.editpasswordL.text.toString()
            },
            if (binding.editDOBL.text.toString().isEmpty()){
                binding.editDOBL.error = "Please enter your DOB"
                return
            }else{
            binding.editDOBL.text.toString()
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
                    val intent = Intent(this@customer_local_register, customer_local_login::class.java)
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