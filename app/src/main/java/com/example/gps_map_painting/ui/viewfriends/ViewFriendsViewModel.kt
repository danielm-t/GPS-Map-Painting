package com.example.gps_map_painting.ui.viewfriends

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
class ViewFriendsViewModel : ViewModel() {

        private val _text = MutableLiveData<String>().apply {
            value = "This is View Friends Page"
        }
        val text: LiveData<String> = _text
}