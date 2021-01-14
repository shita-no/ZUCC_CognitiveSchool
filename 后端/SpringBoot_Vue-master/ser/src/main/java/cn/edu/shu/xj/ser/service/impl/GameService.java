package cn.edu.shu.xj.ser.service.impl;

import cn.edu.shu.xj.ser.entity.Game;
import cn.edu.shu.xj.ser.mapper.GameMapper;
import cn.edu.shu.xj.ser.service.IGameService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService extends ServiceImpl<GameMapper, Game> implements IGameService {
    @Autowired
    GameMapper gameMapper;

    public double getCsp(String gamerId) {
        return gameMapper.getCsp(gamerId);
    }

    public double getMsp(String gamerId) {
        return gameMapper.getMsp(gamerId);
    }

    public double getPsp(String gamerId) {
        return gameMapper.getPsp(gamerId);
    }

    public double getSsp(String gamerId) {
        return gameMapper.getPsp(gamerId);
    }

    public int queryCs(String gamerId){
        return gameMapper.queryCs(gamerId);
    }
    public int queryMs(String gamerId){
        return gameMapper.queryMs(gamerId);
    }
    public int queryPs(String gamerId){
        return gameMapper.queryPs(gamerId);
    }
    public int querySs(String gamerId){
        return gameMapper.querySs(gamerId);
    }
    public double queryCsp(String gamerId){
        return gameMapper.queryCsp(gamerId);
    }
    public double queryMsp(String gamerId){
        return gameMapper.queryMsp(gamerId);
    }
    public double queryPsp(String gamerId){
        return gameMapper.queryPsp(gamerId);
    }
    public double querySsp(String gamerId){
        return gameMapper.querySsp(gamerId);
    }
}
