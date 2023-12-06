package com.example.csse_mobile

import com.example.csse_mobile.interfaces.LCustomerInterface
import com.example.csse_mobile.models.CustomerLocal
import com.example.csse_mobile.models.LoginCustomerLocal
import androidx.test.rule.ActivityTestRule
import okhttp3.ResponseBody
import okio.Timeout
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class CustomerLocalLoginTest {
    @get:Rule
    val activityRule: ActivityTestRule<customer_local_login> = ActivityTestRule(customer_local_login::class.java)

    private lateinit var loginActivity: customer_local_login

    @Before
    fun setUp() {
        loginActivity = activityRule.activity
    }

    @Test
    fun testLoginSuccess() {
        // Mock API service
        val apiService = object : LCustomerInterface {
            override fun registerCustomer(customer: CustomerLocal): Call<ResponseBody> {
                TODO()
            }

            override fun loginCustomer(login: LoginCustomerLocal): Call<ResponseBody> {
                // Return a successful response
                return object : Call<ResponseBody> {
                    override fun enqueue(callback: Callback<ResponseBody>) {
                        callback.onResponse(this, Response.success(ResponseBody.create(null, "Success")))
                    }

                    // Other methods are not needed for this test
                    override fun isExecuted(): Boolean = false
                    override fun clone(): Call<ResponseBody> = this
                    override fun isCanceled(): Boolean = false
                    override fun cancel() {}
                    override fun execute(): Response<ResponseBody> = throw UnsupportedOperationException()
                    override fun request(): okhttp3.Request = throw UnsupportedOperationException()
                    override fun timeout(): Timeout = throw UnsupportedOperationException()
                }
            }
        }

        // Set the mock API service
        loginActivity.apiService = apiService

        // Call the login function
        loginActivity.onLogin()

        // Assert that login was successful
        assertEquals("Login successful", loginActivity.toastMessage)
    }

    @Test
    fun testLoginFailure() {
        // Mock API service
        val apiService = object : LCustomerInterface {
            override fun registerCustomer(customer: CustomerLocal): Call<ResponseBody> {
                TODO()
            }

            override fun loginCustomer(login: LoginCustomerLocal): Call<ResponseBody> {
                // Return an unsuccessful response
                return object : Call<ResponseBody> {
                    override fun enqueue(callback: Callback<ResponseBody>) {
                        callback.onResponse(this, Response.error(404, ResponseBody.create(null, "Not Found")))
                    }

                    // Other methods are not needed for this test
                    override fun isExecuted(): Boolean = false
                    override fun clone(): Call<ResponseBody> = this
                    override fun isCanceled(): Boolean = false
                    override fun cancel() {}
                    override fun execute(): Response<ResponseBody> = throw UnsupportedOperationException()
                    override fun request(): okhttp3.Request = throw UnsupportedOperationException()
                    override fun timeout(): Timeout = throw UnsupportedOperationException()
                }
            }
        }

        // Set the mock API service
        loginActivity.apiService = apiService

        // Call the login function
        loginActivity.onLogin()

        // Assert that login failed
        assertEquals("Login failed", loginActivity.toastMessage)
    }
}