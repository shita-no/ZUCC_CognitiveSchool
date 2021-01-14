package cn.edu.shu.xj.ser.mapper;

import cn.edu.shu.xj.ser.entity.Game;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.sun.xml.internal.rngom.parse.host.Base;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface GameMapper extends BaseMapper<Game> {
    @Select("UPDATE game \n" +
            "SET csp = cs/\n" +
            "(\n" +
            "\tselect sum(cs)\n" +
            "\t FROM (select cs from game)a\n" +
            ")\n" +
            "WHERE gamer_id =#{gamer_id}\n")
    double getCsp(@Param("gamer_id")String gamerId);

    @Select("UPDATE game \n" +
            "SET msp = ms/\n" +
            "(\n" +
            "\tselect sum(ms)\n" +
            "\t FROM (select ms from game)a\n" +
            ")\n" +
            "WHERE gamer_id =#{gamer_id}\n")
    double getMsp(@Param("gamer_id")String gamerId);

    @Select("UPDATE game \n" +
            "SET psp = ps/\n" +
            "(\n" +
            "\tselect sum(ps)\n" +
            "\t FROM (select ps from game)a\n" +
            ")\n" +
            "WHERE gamer_id =#{gamer_id}\n")
    double getPsp(@Param("gamer_id")String gamerId);

    @Select("UPDATE game \n" +
            "SET ssp = ss/\n" +
            "(\n" +
            "\tselect sum(ss)\n" +
            "\t FROM (select ss from game)a\n" +
            ")\n" +
            "WHERE gamer_id =#{gamer_id}\n")
    double getSsp(@Param("gamer_id")String gamerId);

    @Select("SELECT cs FROM game WHERE gamer_id=#{gamer_id} ")
    int queryCs(@Param("gamer_id")String gamerId);
    @Select("SELECT ms FROM game WHERE gamer_id=#{gamer_id} ")
    int queryMs(@Param("gamer_id")String gamerId);
    @Select("SELECT ps FROM game WHERE gamer_id=#{gamer_id} ")
    int queryPs(@Param("gamer_id")String gamerId);
    @Select("SELECT ss FROM game WHERE gamer_id=#{gamer_id} ")
    int querySs(@Param("gamer_id")String gamerId);

    @Select("SELECT csp FROM game WHERE gamer_id=#{gamer_id} ")
    double queryCsp(@Param("gamer_id")String gamerId);
    @Select("SELECT msp FROM game WHERE gamer_id=#{gamer_id} ")
    double queryMsp(@Param("gamer_id")String gamerId);
    @Select("SELECT psp FROM game WHERE gamer_id=#{gamer_id} ")
    double queryPsp(@Param("gamer_id")String gamerId);
    @Select("SELECT ssp FROM game WHERE gamer_id=#{gamer_id} ")
    double querySsp(@Param("gamer_id")String gamerId);
}
