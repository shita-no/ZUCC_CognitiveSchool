package cn.edu.shu.xj.ser.controller;

import cn.edu.shu.xj.ser.SerApplication;
import cn.edu.shu.xj.ser.entity.Game;
import cn.edu.shu.xj.ser.entity.GameRecord;
import cn.edu.shu.xj.ser.service.IGameService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Api(tags = "测试接口")
@RestController
@RequestMapping("/Game")
public class GameController {
    @Autowired
    IGameService gameService;
    @ApiOperation(value = "新增或修改分数")
    @PostMapping("/save/by/gamer_id")
    public boolean saveBygamerid(@RequestBody Game game) {
        game.setGamerId(SerApplication.gamerinfo.getGamerId());
        return gameService.saveOrUpdate(game);
    }
    @ApiOperation(value = "算csp")
    @PostMapping("/getCsp")
    public double getCsp(){
        System.out.println(SerApplication.gamerinfo.getGamerId());
        System.out.println("csp开始计算");
        //double csp = gameService.getCsp(SerApplication.gamerinfo.getGamerId());
        return gameService.getCsp(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "算msp")
    @PostMapping("/getMsp")
    public double getMsp(){
        return gameService.getMsp(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "算psp")
    @PostMapping("/getPsp")
    public double getPsp(){
        return gameService.getPsp(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "算ssp")
    @PostMapping("/getSsp")
    public double getSsp(){
        return gameService.getSsp(SerApplication.gamerinfo.getGamerId());
    }

    @ApiOperation(value = "显示某用户的cs")
    @GetMapping("/queryCs")
    public int queryCs(String gamerId){
        return gameService.queryCs(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "显示某用户的ms")
    @GetMapping("/queryMs")
    public int queryMs(String gamerId){
        return gameService.queryMs(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "显示某用户的ps")
    @GetMapping("/queryPs")
    public int queryPs(String gamerId){
        return gameService.queryPs(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "显示某用户的ss")
    @GetMapping("/querySs")
    public int querySs(String gamerId){
        return gameService.querySs(SerApplication.gamerinfo.getGamerId());
    }

    @ApiOperation(value = "显示某用户的csp")
    @GetMapping("/queryCsp")
    public double queryCsp(String gamerId){
        return gameService.queryCsp(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "显示某用户的msp")
    @GetMapping("/queryMsp")
    public double queryMsp(String gamerId){
        return gameService.queryMsp(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "显示某用户的psp")
    @GetMapping("/queryPsp")
    public double queryPsp(String gamerId){
        return gameService.queryPsp(SerApplication.gamerinfo.getGamerId());
    }
    @ApiOperation(value = "显示某用户的Ssp")
    @GetMapping("/querySsp")
    public double querySsp(String gamerId){
        return gameService.querySsp(SerApplication.gamerinfo.getGamerId());
    }

}
