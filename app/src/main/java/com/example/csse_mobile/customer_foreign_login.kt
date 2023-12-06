package com.example.csse_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.example.csse_mobile.databinding.ActivityCustomerForeignLoginBinding
import com.example.csse_mobile.interfaces.FCustomerInterface
import com.example.csse_mobile.interfaces.LCustomerInterface
import com.example.csse_mobile.models.LoginCustomerForeign
import com.example.csse_mobile.models.LoginCustomerLocal
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class customer_foreign_login : AppCompatActivity() {
    private lateinit var binding: ActivityCustomerForeignLoginBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCustomerForeignLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnLoginF.setOnClickListener{
            onLogin()
        }
        binding.btnRegisterF.setOnClickListener{
            intent = Intent(this, customer_foreign_register::class.java)
            startActivity(intent)
        }
    }

    private fun onLogin() {
        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.24.1:3000/ticketing/")
            .addConverterFactory(GsonConverterFactory.create()).build()

        val apiService = retrofit.create(FCustomerInterface::class.java)

        val login = LoginCustomerForeign(
            if (binding.editemailF.text.toString().isEmpty()){
                binding.editemailF.error = "Please enter your email"
                return
            }else{
                binding.editemailF.text.toString()
            },
            if (binding.editpassF.text.toString().isEmpty()){
                binding.editpassF.error = "Please enter your password"
                return
            }else{
                binding.editpassF.text.toString()
            }
        )
        Log.d("Login", login.toString())

        val call = apiService.loginCustomer(login)

        call.enqueue(object : Callback<ResponseBody> {
            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Log.d("Response", response.toString())
                if (response.isSuccessful) {
                    // login successful
                    Toast.makeText(applicationContext, "Login successful", Toast.LENGTH_SHORT).show()
                    // Start the next activity or perform any other action
                    val intent = Intent(this@customer_foreign_login, customer_dashboard::class.java)
                    startActivity(intent)
                } else {
                    // login failed
                    Toast.makeText(applicationContext, "Login failed", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                // Request failed
                Toast.makeText(applicationContext, "Request failed: " + t.message, Toast.LENGTH_SHORT).show()
            }
        })
    }
}