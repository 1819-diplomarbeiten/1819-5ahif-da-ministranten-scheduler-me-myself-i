package at.htl.facade;

import at.htl.entities.User;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class UserFacade {

    @PersistenceContext
    EntityManager entityManager;

    public List<User> getAllUser() {
        return entityManager.createNamedQuery("User.getAll",User.class).getResultList();
    }

    public User getUserById(int id) {
        return entityManager.find(User.class,id);
    }

    public void updateUser(User user) {
        this.entityManager.merge(user);
    }

    public void createUser(User user) {
        this.entityManager.persist(user);
    }

    public void deleteUser(int id) {
        this.entityManager.remove(entityManager.find(User.class,id));
    }
}
