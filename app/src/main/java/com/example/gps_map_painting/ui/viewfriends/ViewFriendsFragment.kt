package com.example.gps_map_painting.ui.viewfriends

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import com.example.gps_map_painting.databinding.FragmentViewFriendsBinding

class ViewFriendsFragment : Fragment(){
    private var _binding: FragmentViewFriendsBinding? = null
    private val binding get() = _binding!!
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val viewFriendsViewModel =
                ViewModelProvider(this).get(ViewFriendsViewModel::class.java)

        _binding = FragmentViewFriendsBinding.inflate(inflater, container, false)
        val root: View = binding.root

        return root
    }
}