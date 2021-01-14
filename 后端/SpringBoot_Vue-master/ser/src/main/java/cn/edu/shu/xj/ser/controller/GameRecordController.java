package cn.edu.shu.xj.ser.controller;

import cn.edu.shu.xj.ser.SerApplication;
import cn.edu.shu.xj.ser.entity.GameRecord;
import cn.edu.shu.xj.ser.entity.GamerInfo;
import cn.edu.shu.xj.ser.service.IGameRecordService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "测试接口")
@RestController
@RequestMapping("/gameRecord")
public class GameRecordController {
    @Autowired
    IGameRecordService gameRecordService;
//    @ApiOperation(value = "新增或修改相关数据")
//    @PostMapping("/save")
//    public boolean save(@RequestBody GameRecord gameRecord) {
//        int gameId = gameRecordService.getMaxGameId();
//        gameRecord.setGameId(gameId);
//        return gameRecordService.saveOrUpdate(gameRecord);
//    }
    @ApiOperation(value = "新增或修改相关数据")
    @PostMapping("/save")
    public boolean save(@RequestBody GameRecord gameRecord) {
        return gameRecordService.saveOrUpdate(gameRecord);
}
    @ApiOperation(value = "新增或修改相关数据根据用户id")
    @PostMapping("/save/by/gamer_id")
    public boolean saveBygamerid(@RequestBody GameRecord gameRecord) {
        gameRecord.setGamerId(SerApplication.gamerinfo.getGamerId());
        return gameRecordService.saveOrUpdate(gameRecord);
    }
//    @ApiOperation(value = "选择游戏关卡和设置分数")
//    @PostMapping("/addGi")
//    public boolean addGi(@RequestBody GameRecord gameRecord) {
//        gameRecord.setGamerId(SerApplication.gamerinfo.getGamerId());
//        gameRecord.setGameId();
//        gameRecord.setGameScore();
//        return gameRecordService.saveOrUpdate(gameRecord);
//    }

    @ApiOperation(value = "按游戏id和用户id显示游戏记录")
    @GetMapping("/list/by/id")
    public List<GameRecord> ListBygamerid(long gamerId, int gameId){
        return gameRecordService.ListBygamerid(gamerId,gameId);
    }

//    @ApiOperation(value = "")
//    @PostMapping("/add")
//    public boolean add(@RequestParam long gamerId, @RequestParam int gameId){
//        GameRecord gameRecord=new GameRecord(gameId,gameId,0,0,0);
//
//        return gameRecordService.saveOrUpdate(gameRecord);
//    }
//    @ApiOperation(value = "查询全列表")
//    @GetMapping("/list")
//    public List<GameRecord> list(@RequestParam(required = false) Long gamerId) {
////        if (gamerId== null) {
////            gamerId = "";
////        }
//        LambdaQueryWrapper<GamerInfo> qw = new QueryWrapper<GamerInfo>().lambda().like(GamerInfo::getGamerId, gamerId);
//        return gameRecordService.list(qw);
//    }
    @ApiOperation(value = "按游戏id和用户id显示最高分数")
    @GetMapping("/querygs")
    public int gsInrecord(String gamerId,int gameId){


        return gameRecordService.gsInrecord(SerApplication.gamerinfo.getGamerId(),gameId);
    }
}
