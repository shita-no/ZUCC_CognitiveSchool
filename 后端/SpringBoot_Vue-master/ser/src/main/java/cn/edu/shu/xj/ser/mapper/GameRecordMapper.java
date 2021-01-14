package cn.edu.shu.xj.ser.mapper;

import cn.edu.shu.xj.ser.entity.GameRecord;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GameRecordMapper extends BaseMapper<GameRecord>{
   @Select("select * from game_record where gamer_id=#{gamer_id} and game_id=#{game_id}")
   List<GameRecord> ListBygamerid(@Param("gamer_id")long gamerId,@Param("game_id")int gameId);

   @Select("SELECT max(game_score) FROM game_record WHERE gamer_id=#{gamer_id} and game_id=#{game_id}")
   int gsInrecord(@Param("gamer_id")String gamerId,@Param("game_id")int gameId);

   @Select("SELECT max(game_id) FROM game_record")
   int getMaxGameId();


}
