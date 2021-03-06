package bean;

import java.io.Serializable;

/**
 * Created by Dao on 2017/5/31.
 */
public class User implements Serializable {
    private static final long serialVersionUID = 107717250835356582L;
    private String account;
    private String password;
    private String encrypted;


    public User() {
    }


    public User( String account, String password, String encrypted) {
            this.account = account;
            this.password = password;
            this.encrypted = encrypted;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEncrypted() {
        return encrypted;
    }

    public void setEncrypted(String encrypted) {
        this.encrypted = encrypted;
    }
}
