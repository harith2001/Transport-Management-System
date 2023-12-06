package com.example.csse_mobile.interfaces
import com.example.csse_mobile.models.CustomerForeign
import com.example.csse_mobile.models.LoginCustomerForeign
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.http.*

interface FCustomerInterface {

    @POST("customer-foreign")
    fun registerCustomer(@Body customer: CustomerForeign): Call<ResponseBody>

    @POST("customer-foreign/login")
    fun loginCustomer(@Body login: LoginCustomerForeign): Call<ResponseBody>
}