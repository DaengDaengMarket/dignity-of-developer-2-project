package com.dignity.puppymarket.controller;

import com.dignity.puppymarket.domain.Notice;
import com.dignity.puppymarket.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    @GetMapping("/notice")
    public String getNotices(Model model) {
        List<Notice> notices = noticeService.getNotices();
        model.addAttribute("notices", notices);
        return "notice";
    }

    @PostMapping("/notice")
    public String saveNotice(@RequestParam("title") String title,
                             @RequestParam("content") String content
    ) {

        Notice notice = new Notice();
        notice.setTitle(title);
        notice.setContent(content);
        notice.setCreatedAt(LocalDateTime.now());

        noticeService.saveNotice(notice);
        return "redirect:/notice";
    }

    @GetMapping("/make")
    public String goWriteForm() {
        return "noticeForm";
    }

    @DeleteMapping("/notice/{id}")
    public String deleteNotice(@PathVariable Long id) {
        Notice notice = noticeService.getNotice(id);
        noticeService.deleteNotice(notice);
        return "redirect:/notice";
    }

}
