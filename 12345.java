class Account {
    private int balance = 1000;
    private final Object lock = new Object();

    public void withdraw(int amount) {
        synchronized (lock) {
            if (balance >= amount) {
                balance -= amount;
            }
        }
    }
}