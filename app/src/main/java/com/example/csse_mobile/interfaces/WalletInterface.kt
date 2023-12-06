package com.example.csse_mobile.interfaces
import com.example.csse_mobile.models.Wallet
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.http.*

interface WalletInterface {

    @POST("wallet")
    fun topupWallet(@Body wallet: Wallet): Call<ResponseBody>

    @GET("wallet/{id}")
    fun getWallet(@Path("id") id: Number): Call<ResponseBody>
}