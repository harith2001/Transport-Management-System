package com.example.csse_mobile.interfaces
import com.example.csse_mobile.models.CustomerLocal
import com.example.csse_mobile.models.LoginCustomerLocal
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.http.*

interface LCustomerInterface {

    @POST("customer-local")
     fun registerCustomer(@Body customer: CustomerLocal): Call<ResponseBody>

     @POST("customer-local/login")
        fun loginCustomer(@Body login:LoginCustomerLocal): Call<ResponseBody>
}
