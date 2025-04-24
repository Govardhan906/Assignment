import java.util.ArrayList;
import java.util.List;


class Employee {
    private int id;
    private String name;
    private double salary;

    
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.printf("ID: %d, Name: %s, Salary: %.2f%n", id, name, salary);
    }


    public int getId() { return id; }
    public String getName() { return name; }
    public double getSalary() { return salary; }
    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setSalary(double salary) { this.salary = salary; }
}

public class EmployeeManagement {
    public static void main(String[] args) {
       
        Employee emp1 = new Employee(101, "Alice Johnson", 55000.00);
        Employee emp2 = new Employee(102, "Bob Smith",    62000.50);
        Employee emp3 = new Employee(103, "Carol Davis",  58000.75);

       
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

       
        System.out.println("Employee Details:");
        for (Employee e : employees) {
            e.displayDetails();
        }
    }
}
