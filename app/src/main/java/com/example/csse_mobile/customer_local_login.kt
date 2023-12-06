package com.example.csse_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.example.csse_mobile.databinding.ActivityCustomerLocalLoginBinding
import com.example.csse_mobile.interfaces.LCustomerInterface
import com.example.csse_mobile.models.LoginCustomerLocal
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class customer_local_login : AppCompatActivity() {
    lateinit var binding: ActivityCustomerLocalLoginBinding
    lateinit var apiService: LCustomerInterface
    var toastMessage: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCustomerLocalLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnLoginL.setOnClickListener{
            onLogin()
        }

        binding.btnRegisterL.setOnClickListener{
            intent = Intent(this, customer_local_register::class.java)
            startActivity(intent)
        }

        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.24.1:3000/ticketing/")
            .addConverterFactory(GsonConverterFactory.create()).build()

        apiService = retrofit.create(LCustomerInterface::class.java)
    }

    fun onLogin() {
        val login = LoginCustomerLocal(
            if (binding.editemailL.text.toString().isEmpty()){
                binding.editemailL.error = "Please enter your email"
                return
            }else{
                binding.editemailL.text.toString()
            },
            if (binding.editpassL.text.toString().isEmpty()){
                binding.editpassL.error = "Please enter your password"
                return
            }else{
                binding.editpassL.text.toString()
            }
        )
        Log.d("Login", login.toString())

        val call = apiService.loginCustomer(login)

        call.enqueue(object : Callback<ResponseBody> {
            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Log.d("Response", response.toString())
                if (response.isSuccessful) {
                    runOnUiThread {
                        // login successful
                        toastMessage = "Login successful"
                        Toast.makeText(applicationContext, toastMessage, Toast.LENGTH_SHORT).show()
                        // Start the next activity or perform any other action
                        val intent = Intent(this@customer_local_login, customer_dashboard::class.java)
                        startActivity(intent)
                    }
                } else {
                    runOnUiThread {
                        // login failed
                        toastMessage = "Login failed"
                        Toast.makeText(applicationContext, toastMessage, Toast.LENGTH_SHORT).show()
                    }
                }
            }

            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                runOnUiThread {
                    // Request failed
                    toastMessage = "Request failed: " + t.message
                    Toast.makeText(applicationContext, toastMessage, Toast.LENGTH_SHORT).show()
                }
            }
        })
    }
}