package at.htl.entities;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.LinkedList;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name = "User.getAll",query = "select v from User v")
})
@Table(name = "USER_DATA")
@XmlRootElement
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String u_Name;

    private String u_Password;

    private String e_Mail;

    private long phoneNumber;

    private long phoneNumberSec;

    private Boolean whats_App_re;

    private Boolean e_Mail_re;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Participant> participantList = new LinkedList<Participant>();


    public User() {
    }

    public User(String u_Name, String u_Password, String e_Mail, long phoneNumber, long phoneNumberSec, Boolean whats_App_re, Boolean e_Mail_re) {
        this.u_Name = u_Name;
        this.u_Password = u_Password;
        this.e_Mail = e_Mail;
        this.phoneNumber = phoneNumber;
        this.phoneNumberSec = phoneNumberSec;
        this.whats_App_re = whats_App_re;
        this.e_Mail_re = e_Mail_re;
        this.participantList = null;
    }

    //Getter Setter
    public int getUserId() {
        return userId;
    }

    public String getU_Name() {
        return u_Name;
    }

    public void setU_Name(String u_Name) {
        this.u_Name = u_Name;
    }

    public String getU_Password() {
        return u_Password;
    }

    public void setU_Password(String u_Password) {
        this.u_Password = u_Password;
    }

    public String getE_Mail() {
        return e_Mail;
    }

    public void setE_Mail(String e_Mail) {
        this.e_Mail = e_Mail;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public long getPhoneNumberSec() {
        return phoneNumberSec;
    }

    public void setPhoneNumberSec(int phoneNumberSec) {
        this.phoneNumberSec = phoneNumberSec;
    }

    public Boolean getWhats_App_re() {
        return whats_App_re;
    }

    public void setWhats_App_re(Boolean whats_App_re) {
        this.whats_App_re = whats_App_re;
    }

    public Boolean getE_Mail_re() {
        return e_Mail_re;
    }

    public void setE_Mail_re(Boolean e_Mail_re) {
        this.e_Mail_re = e_Mail_re;
    }

    public List<Participant> getParticipantList() {
        return participantList;
    }

    public void setParticipantList(List<Participant> participantList) {
        this.participantList = participantList;
    }
}
