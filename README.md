# Interview Question Simple PHP

## Follow these steps


- Fork this repository into your GitHub account (You can create a GitHub account if you don't have one)
- Clone the repository from your repository
- Checkout main branch
- Commit your changes with the code for below question
- Upload screenshot for the interface and error message
- Add ```MYwavePSSD``` as collaborators


- Expected files:
  >
  > **Question A**
  > - html.php
  > - info.php
  > - verify_ajax.js
  
  >
  > **Question B**
  > - query.txt


## Question A

<img src="https://github.com/MYwavePSSD/InterviewQuestion-PHP-Basic/blob/main/screen.png" />


a. Draw an interface in ***html.php***
  1. “Submit” button with green background color and white font color
  
b. When user key in username and click “Submit”
  1. in ***verify_ajax.js*** check is the input is empty
  2. If input is not empty, use ajax to pass value to info.php
  3. In ***info.php*** check is the value is abc.
  4. Return and show message Verified if the username is abc (refer to Picture 2), prompt Error if username is not abc (refer to Picture 2)

### Bonus Stage

1. Apply clean code principle
2. Apply comment
3. Beutify the interface

## Question B

- create **query.txt** to provide answer for 4 SQL below.

**Table 1: employee_profile_table**


|employee_id |employee_no |employee_name|ic_no|
|---|---|---|---|
|1 |1000 |Ali |1234|
|2 |1001 |Ahmad |2345|
|3 |1002 |Koay |3456|
|4 |1003 |Lau |4567|


**Table 2: job_profile_table**

|job_id |job_name|
|---|---|
|1 |Finance|
|2 |Developer|
|3 |Admin|
|4|Senior Developer|

**Table 3: employee_job_table**

|employee_id |job_id |effective_date|
|---|---|---|
|1| 2| 2019-01-01|
|1| 4| 2020-01-01|
|2| 2| 2018-01-01|
|3| 3| 2017-05-14|
|4| 1| 2019-06-09|

### With referring to the tables above, please provide a single SQL statement to :

a. update the employee with employee_no 1002 job to 4, with effective 2020-01-01.

UPDATE employee_job_table
SET job_id = 4, effective_date = '2020-01-01'
WHERE employee_id = (SELECT employee_id FROM employee_profile_table WHERE employee_no = 1002);


b. list out the employee name, employee no, effective date, job title.

SELECT ep.employee_name, ep.employee_no, ej.effective_date, jp.job_name 
FROM employee_profile_table ep
JOIN employee_job_table ej ON ep.employee_id = ej.employee_id
JOIN job_profile_table jp ON ej.job_id= jp.job_id;


c. list out the employee name, employee no, **latest job title**
<!-- Min effective date= Latest job title -->
SELECT 
    e.employee_name,
    e.employee_no,
    j.job_name
FROM 
    employee_profile_table e
JOIN 
    employee_job_table ej ON e.employee_id = ej.employee_id
JOIN 
    job_profile_table j ON ej.job_id = j.job_id
WHERE 
    ej.effective_date = (
        SELECT MIN(effective_date) 
        FROM employee_job_table 
        WHERE employee_id = e.employee_id
    );


d. delete all employee with employee_no 1000 job title, with effective date of 2020-01-01

DELETE FROM employee_job_table
WHERE employee_id = (SELECT employee_id FROM employee_profile_table WHERE employee_no = 1000)
AND effective_date = '2020-01-01';

