package com.douzone.frontdev.ch08.vo;

public class UserVo {
	private Long no;
	
	private String name; // @Length(min=, max=): 문자열 길이 min과  max 사이인가?
	private String email; // @NotEmpty : 비면 안됨, Email 형식
	private String password; // @Length(min=4, max=16) : 4 ~ 16자리
	private String gender;
	private String role;
	
	public Long getNo() {
		return no;
	}
	public void setNo(Long no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserVo [no=" + no + ", name=" + name + ", email=" + email + ", password=" + password + ", gender="
				+ gender + ", role=" + role + "]";
	}
}