package com.example.csse_mobile

import android.widget.EditText
import androidx.test.espresso.core.internal.deps.guava.base.Joiner.on
import com.example.csse_mobile.interfaces.FCustomerInterface
import com.example.csse_mobile.models.CustomerForeign
import com.nhaarman.mockitokotlin2.mock
import com.nhaarman.mockitokotlin2.verify
import kotlinx.coroutines.DefaultExecutor.enqueue
import okhttp3.ResponseBody
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.ArgumentMatchers.any
import org.mockito.Mockito.`when`
import org.mockito.MockitoAnnotations.initMocks
import org.mockito.junit.MockitoJUnitRunner
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

@RunWith(MockitoJUnitRunner::class)
class CustomerForeignRegisterTest {
    private lateinit var activity: customer_foreign_register
    private lateinit var apiService: FCustomerInterface

    @Before
    fun setup() {
        initMocks(this)
        activity = customer_foreign_register()
        apiService = mock()
        activity.apiService = apiService
    }

    @Test
    fun testRegistrationSuccess() {
        // Mock the EditText fields
        val nameEditText = mock<EditText> {
            on { text.toString() }thenReturn "John Doe"
        }
        val emailEditText = mock<EditText> {
            on { text.toString() }thenReturn "johndoe@example.com"
        }
        val phoneEditText = mock<EditText> {
            on { text.toString() }thenReturn "1234567890"
        }
        val passportEditText = mock<EditText> {
            on { text.toString() }thenReturn "ABCD1234"
        }
        val addressEditText = mock<EditText> {
            on { text.toString() }thenReturn "123 Main St"
        }
        val passwordEditText = mock<EditText> {
            on { text.toString() }thenReturn "password"
        }
        val arrivalEditText = mock<EditText> {
            on { text.toString() }thenReturn "2023-01-01"
        }
        val departureEditText = mock<EditText> {
            on { text.toString() }thenReturn "2023-01-07"
        }

        // Set the mocked EditText fields in the activity
        activity.binding.editnameF = nameEditText
        activity.binding.editemailF = emailEditText
        activity.binding.editphoneF = phoneEditText
        activity.binding.editpassportF = passportEditText
        activity.binding.editaddressF = addressEditText
        activity.binding.editpasswordF = passwordEditText
        activity.binding.editarrivalF = arrivalEditText
        activity.binding.editdepatureF = departureEditText

        // Mock a successful API response
        val responseBody = mock<ResponseBody>()
        val call = mock<Call<ResponseBody>> {
            on { enqueue(any()) } answers {
                val callback: Callback<ResponseBody> = it.getArgument(0)
                callback.onResponse(call, Response.success(responseBody))
            }
        }
        `when`(apiService.registerCustomer(any())).thenReturn(call)

        // Perform the registration
        activity.onRegister()

        // Verify that the API service was called with the correct customer object
        verify(apiService).registerCustomer(
            CustomerForeign(
                "John Doe",
                "johndoe@example.com",
                "1234567890",
                "ABCD1234",
                "123 Main St",
                "password",
                "2023-01-01",
                "2023-01-07"
            )
        )
    }
}