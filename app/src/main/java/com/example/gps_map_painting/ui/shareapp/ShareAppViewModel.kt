package com.example.gps_map_painting.ui.shareapp

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class ShareAppViewModel : ViewModel() {

private val _text = MutableLiveData<String>().apply {
        value = "This is Share App Page"
    }
    val text: LiveData<String> = _text

}
