package cn.edu.shu.xj.ser.mapper;

import cn.edu.shu.xj.ser.entity.GameRecord;
import cn.edu.shu.xj.ser.entity.GamerInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GamerInfoMapper extends BaseMapper<GamerInfo>{
    @Select("SELECT age FROM gamer_info WHERE gamer_id=#{gamer_id} ")
    int queryAge(@Param("gamer_id")String gamerId);
    @Select("SELECT nick_name FROM gamer_info WHERE gamer_id=#{gamer_id} ")
    String queryName(@Param("gamer_id")String gamerId);
}
