//package cn.edu.shu.xj.ser.controller;
//
//import cn.edu.shu.xj.ser.entity.GamerInfo;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import java.util.HashMap;
//import java.util.Map;
//
//public class LoginController {
//    @RequestMapping(value = "/wxlogin", method = {RequestMethod.POST,RequestMethod.GET})
//    @ResponseBody
//    public Map<String,String> wxlogin(GamerInfo gamerinfo, Model model) throws Exception{
//
//        //Shiro实现登录
//        Map<String,String> map = new HashMap<String, String>();
//        UsernamePasswordToken token = new UsernamePasswordToken(gamerinfo.getUsername(),
//                gamerinfo.getPassword());
//        //Subject：项目，通过Shiro保护的项目一个抽象概念
//        //通过令牌（token）与项目（subject）的登陆（login）关系，Shiro保证了项目整体的安全
//        //获取Subject单例对象
//        Subject subject = SecurityUtils.getSubject();
//        //如果获取不到用户名就是登录失败，但登录失败的话，会直接抛出异常
//        //登录
//        subject.login(token);
//
//        if (subject.hasRole("admin")) {
//            map.put("role","admin");
//            map.put("username",userlogin.getUsername());
//        } else if (subject.hasRole("teacher")) {
//            map.put("role","teacher");
//            map.put("username",userlogin.getUsername());
//        } else if (subject.hasRole("student")) {
//            map.put("role","student");
//            map.put("username",userlogin.getUsername());
//        }
//        return map;
//
//    }
//}
