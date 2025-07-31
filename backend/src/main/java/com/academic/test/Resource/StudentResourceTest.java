package com.academic.resource;

import com.academic.dto.StudentDTO;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
class StudentResourceTest {

    @Test
    void testGetAllStudents() {
        given()
          .when().get("/api/students")
          .then()
             .statusCode(200);
    }

    @Test
    void testCreateStudent() {
        StudentDTO student = new StudentDTO();
        student.name = "Lucas Silva";
        student.email = "lucas.silva@example.com";
        student.enrollmentNumber = "20250001";

        given()
          .contentType(ContentType.JSON)
          .body(student)
          .when().post("/api/students")
          .then()
             .statusCode(201);
    }

    @Test
    void testGetStudentByIdNotFound() {
        given()
          .when().get("/api/students/9999")
          .then()
             .statusCode(404);
    }
}
