package com.ust.taaf;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaafController {

    @PostMapping("/execute")
    @ResponseBody
    public TaafExecuteDTO execute(@RequestBody TaafExecuteDTO taafExecuteDTO) {
        if (taafExecuteDTO.getIds() != null && !taafExecuteDTO.getIds().isEmpty()) {
            for (String id : taafExecuteDTO.getIds()) {
                System.out.println(id);
            }

            taafExecuteDTO.setMessage("success");
        }

        try {
            System.out.println(execCmd("D:\\codebase\\TAAF\\taaf\\sample.bat"));
        } catch (IOException e) {
            e.printStackTrace();
        }

        return taafExecuteDTO;
    }

    public static String execCmd(String cmd) throws java.io.IOException {
        java.util.Scanner s = new java.util.Scanner(Runtime.getRuntime().exec(cmd).getInputStream())
                .useDelimiter("\\A");
        return s.hasNext() ? s.next() : "";
    }
}
