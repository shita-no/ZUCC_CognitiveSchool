package cn.edu.shu.xj.ser.service;

import cn.edu.shu.xj.ser.entity.GameRecord;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface IGameRecordService extends IService<GameRecord> {
    List<GameRecord>ListBygamerid(long gamerId,int gameId);
    int gsInrecord(String gamerId,int gameId);
    int getMaxGameId();
}
