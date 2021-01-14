package cn.edu.shu.xj.ser.entity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("game_record")
public class GameRecord {
    @TableField(value = "game_score")
    private int gameScore;
    @TableId(value = "id", type =IdType.AUTO)
    private int id;
    @TableField(value = "game_id")
    private int gameId;
    @TableField(value = "gamer_id")
    private String gamerId;
    @TableField(value = "per")
    private double per;




}

