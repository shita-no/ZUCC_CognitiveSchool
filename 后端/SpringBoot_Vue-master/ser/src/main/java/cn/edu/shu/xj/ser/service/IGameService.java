package cn.edu.shu.xj.ser.service;

import cn.edu.shu.xj.ser.entity.Game;
import com.baomidou.mybatisplus.extension.service.IService;

public interface IGameService extends IService<Game> {
    double getCsp(String gamerId);
    double getMsp(String gamerId);
    double getPsp(String gamerId);
    double getSsp(String gamerId);

    int queryCs(String gamerId);
    int queryMs(String gamerId);
    int queryPs(String gamerId);
    int querySs(String gamerId);

    double queryCsp(String gamerId);
    double queryMsp(String gamerId);
    double queryPsp(String gamerId);
    double querySsp(String gamerId);
}
