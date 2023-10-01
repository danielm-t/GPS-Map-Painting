package com.example.gps_map_painting.ui.shareapp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import com.example.gps_map_painting.databinding.FragmentShareAppBinding

class ShareAppFragment : Fragment(){
    private var _binding: FragmentShareAppBinding? = null
    private val binding get() = _binding!!
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val shareAppViewModel =
                ViewModelProvider(this).get(ShareAppViewModel::class.java)

        _binding = FragmentShareAppBinding.inflate(inflater, container, false)
        val root: View = binding.root

        val textView: TextView = binding.textShareapp
        shareAppViewModel.text.observe(viewLifecycleOwner) {
            textView.text = it
        }
        return root
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}