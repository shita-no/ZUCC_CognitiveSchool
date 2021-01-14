package cn.edu.shu.xj.ser.entity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import  lombok.Data;

@Data
@TableName("gamer_info")
public class GamerInfo {
    @TableId(value = "gamer_id")
    private String gamerId;
    @TableField(value = "nick_name")
    private String nickName;
    @TableField(value = "gender")
    private int gender;
    @TableField(value = "age")
    private int age;

//    public GamerInfo(){
//
//    }
//    public GamerInfo(long gamer_id, String nick_name, int gender, int age) {
//        this.gamer_id = gamer_id;
//        this.nick_name = nick_name;
//        this.gender = gender;
//        this.age = age;
//    }


}
