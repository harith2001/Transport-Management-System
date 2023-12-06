package com.example.csse_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.csse_mobile.databinding.ActivityCustomerDashboardBinding

class customer_dashboard : AppCompatActivity() {
    private lateinit var binding: ActivityCustomerDashboardBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCustomerDashboardBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnBusL.setOnClickListener{
            intent = Intent(this, schedule_bus::class.java)
            startActivity(intent)
        }
    }
}