package cn.edu.shu.xj.ser.service.impl;

import cn.edu.shu.xj.ser.entity.GamerInfo;
import cn.edu.shu.xj.ser.mapper.GamerInfoMapper;
import cn.edu.shu.xj.ser.service.IGamerInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GamerInfoService extends ServiceImpl<GamerInfoMapper, GamerInfo> implements IGamerInfoService {
    @Autowired
    GamerInfoMapper gamerInfoMapper;
    public int queryAge(String gamerId){
        return gamerInfoMapper.queryAge(gamerId);
    }
    public String queryName(String gamerId){
        return gamerInfoMapper.queryName(gamerId);
    }





}
