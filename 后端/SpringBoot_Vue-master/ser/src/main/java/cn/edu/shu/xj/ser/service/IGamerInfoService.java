package cn.edu.shu.xj.ser.service;

import cn.edu.shu.xj.ser.entity.GamerInfo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

public interface IGamerInfoService extends IService<GamerInfo> {
    int queryAge(String gamerId);
    String queryName(String gamerId);
}
