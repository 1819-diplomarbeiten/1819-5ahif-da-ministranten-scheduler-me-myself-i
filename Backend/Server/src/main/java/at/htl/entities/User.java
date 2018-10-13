package at.htl.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int userId;

    String u_Name;

    String u_Password;

    String e_Mail;

    int phoneNumber;

    int phoneNumberSec;

    Boolean whats_App_re;

    Boolean e_Mail_re;
}
