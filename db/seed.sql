USE employee_db;

INSERT INTO employee_table (first_name, last_name, role_id, manager_id) VALUES
    ('Lois', 'Griffin', 1, NULL),
    ('Peter', 'Griffin', 2, 1),
    ('Chris,' 'Griffin', 3, 1),
    ('Meg', 'Griffin', 3, 1),
    ('Stewie', 'Griffin', 3, 1),
    ('Brian', 'Griffin', 4, 7),
    ('Mort', 'Goldman', 8, NULL),
    ('Glenn', 'Quagmire', 5, NULL),
    ('Joe', 'Swanson', 6, 8),
    ('Cleveland', 'Brown', 7, 8)


INSERT INTO roles_table (title, salary, department_id) VALUES
    ('Head Coach', 90000, 1),
    ('Assistant Coach', 75000, 1),
    ('Player', 65000, 3),
    ('Water Assistant', 50000, 5)
    ('Human Resources', 55000, 3)
    ('Security Guard', 65000, 4)
    ('Marketer', 70000, 3)
    ('Team Doctor', 90000, 5)


INSERT INTO department_table (name) VALUES
    ('Coaching'),
    ('Team'),
    ('Admin and Sales'),
    ('Security'),
    ('Team Staff')

