package com.example.csse_mobile

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.csse_mobile.databinding.ActivityFirstpageBinding

class firstpage : AppCompatActivity() {
    lateinit var binding: ActivityFirstpageBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
       binding = ActivityFirstpageBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btncustomerL.setOnClickListener{
            intent = Intent(this, customer_local_login::class.java)
            startActivity(intent)
        }

        binding.btncustomerF.setOnClickListener{
            intent = Intent(this, customer_foreign_login::class.java)
            startActivity(intent)
        }

    }
}