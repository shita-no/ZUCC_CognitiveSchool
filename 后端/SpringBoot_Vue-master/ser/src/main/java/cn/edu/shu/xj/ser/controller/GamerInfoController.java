package cn.edu.shu.xj.ser.controller;


import cn.edu.shu.xj.ser.SerApplication;
import cn.edu.shu.xj.ser.entity.GamerInfo;
import cn.edu.shu.xj.ser.service.IGamerInfoService;
import cn.edu.shu.xj.ser.service.impl.GamerInfoService;
import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = "测试接口")
@RestController
@RequestMapping("/gamer_info")

public class GamerInfoController {

    @Autowired
    IGamerInfoService gamerInfoService;


    //存在该id，修改；不存在不传入，就新增
    @ApiOperation(value = "登录")
    @PostMapping("/save")
    public String save(@RequestBody GamerInfo gamerInfo) {
        if (gamerInfoService.saveOrUpdate(gamerInfo)) {
            SerApplication.gamerinfo = gamerInfo;
            return "登录成功";
        }
        return "登录失败";
        //return gamerInfoService.saveOrUpdate(gamerInfo);
    }

    @ApiOperation(value = "新增或修改年龄，性别")
    @PostMapping("/saveage")
    public String saveAge(@RequestBody GamerInfo gamerInfo) {
        if (gamerInfoService.saveOrUpdate(gamerInfo)) {
            SerApplication.gamerinfo = gamerInfo;
            return "修改成功";
        }
        return "修改失败";
        //return gamerInfoService.saveOrUpdate(gamerInfo);
    }


//    @ApiOperation(value = "删除相关数据")
//    @PostMapping("/remove/by/gamerid")
//    public boolean remove(@RequestParam Long gamerId) {
//        return gamerInfoService.removeById(gamerId);
//    }

    @ApiOperation(value = "删除相关数据")
    @PostMapping("/remove/by/nickname")
    public boolean removeByNickName(@RequestParam String nickName) {
        LambdaQueryWrapper<GamerInfo> qw = new QueryWrapper<GamerInfo>().lambda().eq(GamerInfo::getNickName, nickName);//lambda().like是模糊
        return gamerInfoService.remove(qw);
    }

    @ApiOperation(value = "查询全列表")
    @GetMapping("/list")
    public List<GamerInfo> list(@RequestParam(required = false) String nickName) {
        if (nickName == null) {
            nickName = "";
        }
        LambdaQueryWrapper<GamerInfo> qw = new QueryWrapper<GamerInfo>().lambda().like(GamerInfo::getNickName, nickName);
        return gamerInfoService.list(qw);
    }

    @ApiOperation(value = "显示用户年龄")
    @GetMapping("/queryAge")
    public int queryAge(String gamerId) {
        return gamerInfoService.queryAge(SerApplication.gamerinfo.getGamerId());
    }

    @ApiOperation(value = "显示用户姓名")
    @GetMapping("/queryName")
    public String queryName(String gamerId) {
        return gamerInfoService.queryName(SerApplication.gamerinfo.getGamerId());
    }


}
