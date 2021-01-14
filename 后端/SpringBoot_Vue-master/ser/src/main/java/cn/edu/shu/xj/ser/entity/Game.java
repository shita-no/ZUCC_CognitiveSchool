package cn.edu.shu.xj.ser.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("Game")
public class Game {
    @TableId(value = "gamer_id")
    private String gamerId;
    @TableField(value = "cs")
    private int cs;
    @TableField(value = "csp")
    private double csp;
    @TableField(value = "ms")
    private int ms;
    @TableField(value = "msp")
    private double msp;
    @TableField(value = "ps")
    private int ps;
    @TableField(value = "psp")
    private double psp;
    @TableField(value = "ss")
    private int ss;
    @TableField(value = "ssp")
    private double ssp;
}
