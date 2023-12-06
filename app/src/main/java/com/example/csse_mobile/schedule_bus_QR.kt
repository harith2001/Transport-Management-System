package com.example.csse_mobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.csse_mobile.databinding.ActivityScheduleBusQrBinding
import android.graphics.Bitmap
import android.widget.Button
import android.widget.ImageView
import com.google.zxing.BarcodeFormat
import com.google.zxing.MultiFormatWriter
import com.google.zxing.common.BitMatrix
import com.journeyapps.barcodescanner.BarcodeEncoder

class schedule_bus_QR : AppCompatActivity() {
    private lateinit var binding: ActivityScheduleBusQrBinding
    private lateinit var btnGenerate: Button
    private lateinit var imgQRCode: ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityScheduleBusQrBinding.inflate(layoutInflater)
        setContentView(binding.root)

        btnGenerate = binding.btnQR
        imgQRCode = binding.imgQR

        btnGenerate.setOnClickListener{
            val searchquery = "https://www.sliit.lk/"
            val bitmap = generateQRCode(searchquery)

            imgQRCode.setImageBitmap(bitmap)
        }


    }

    private fun generateQRCode(text: String): Bitmap {
        val multiFormatWriter = MultiFormatWriter()
        try {
            val bitMatrix: BitMatrix = multiFormatWriter.encode(text, BarcodeFormat.QR_CODE, 300, 300)
            val barcodeEncoder = BarcodeEncoder()
            return barcodeEncoder.createBitmap(bitMatrix)
        } catch (e: Exception) {
            e.printStackTrace()
            return Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888)
        }
    }
}