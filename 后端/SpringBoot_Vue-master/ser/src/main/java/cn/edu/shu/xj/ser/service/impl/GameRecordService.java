package cn.edu.shu.xj.ser.service.impl;

import cn.edu.shu.xj.ser.entity.GameRecord;
import cn.edu.shu.xj.ser.mapper.GameRecordMapper;
import cn.edu.shu.xj.ser.service.IGameRecordService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GameRecordService extends ServiceImpl<GameRecordMapper, GameRecord> implements IGameRecordService {
    //@Autowired
    GameRecordMapper gameRecordMapper;
    public List<GameRecord>ListBygamerid(long gamerId,int gameId){
          return gameRecordMapper.ListBygamerid(gamerId,gameId);
    }
    public int gsInrecord(String gamerId,int gameId){
        return gameRecordMapper.gsInrecord(gamerId,gameId);
    }
    public int getMaxGameId(){
        return gameRecordMapper.getMaxGameId();
    }
}
