"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import CustomImage from "@components/CustomImage";
import { signOut, useSession } from "next-auth/react";
import Login from "./Login";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [navbarOpen, setNavOpen] = useState(false);
	const [loginOpen, setLoginOpen] = useState(false);
	const pathname = usePathname();
	const { data: session, status } = useSession();

	const handleLogin = () => {
		setLoginOpen(false)
	}

	const menuItems = [
		{
			label: "หน้าแรก",
			href: "/"
		},
		{
			label: "ขาย",
			href: "#"
		},
		{
			label: "เช่า",
			href: "#"
		},{
			label: "ทรัพย์สินขายฝาก",
			href: "/property-consignment"
		},
		...(status === "authenticated" ? [{
			label: "ผู้ขายฝาก",
			href: "/consignment"
		},] : []), {
			label: "นักลงทุน",
			href: status === "authenticated" ? "/investment" : "/register-investment"
		}, {
			label: "Finn Tips",
			href: "#"
		}, {
			label: "คำถามที่พบบ่อย",
			href: "#"
		},
	];

	return (
		<> {
			!session && (
				<Login loginOpen={loginOpen} handleLogin={handleLogin} />
			)
		}
			<div className="navbar navbar-expand-lg navbar-main">
				<div className="container-fluid">
					<Link className="navbar-brand" href="/">
						<Image src="/logo1.png" alt="Logo 1"
							width={100}
							height={100}
							quality={100}
							sizes="100vw"
							style={
								{
									height: "auto"
								}
							}
							priority />
					</Link>
					<Button className="navbar-toggler"
						onClick={
							() => setNavOpen(!navbarOpen)
						}
						type="button"
						variant="secondary"
						aria-controls="navbarSupportedContent"
						aria-expanded={navbarOpen}>
						<span className="navbar-toggler-icon"></span>
					</Button>

					<Collapse in={navbarOpen}>
						<div className="navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								{
									menuItems.map((item, index) => {
										const isActive = pathname === item.href || (pathname.startsWith("/consignment/") && item.href === "/consignment");

										return (
											<li className={`nav-item ${isActive ? "nav-active" : ""}`} key={index}>
												<Link className="nav-link" aria-current="page" href={item.href}>
													{item.label}
												</Link>
											</li>
										)
									})
								} </ul>
							{
								status !== "loading" && (status === "authenticated" ? (
									<div className="d-flex register">
										<Link className="btn btn-register d-flex align-items-center" href="#"
											onClick={
												(e) => {
													e.preventDefault();
													signOut();
												}
											}>
											<p>{
												session?.user?.name
											}</p>
											<Image src="/register.svg" alt="register"
												width={26}
												height={26}
												priority />
										</Link>
									</div>
								) : (
									<div className="d-flex register">
										<div className={
											`nav-item ${pathname === "/register" ? "nav-active" : ""
											}`
										}>
											<Link className="nav-link" href="/register">
												ลงทะเบียน
											</Link>
										</div>
										<Link className="btn btn-register d-flex align-items-center" href="#"
											onClick={
												(e) => {
													e.preventDefault();
													setLoginOpen(true);
												}
											}>
											<p>เข้าสู่ระบบ</p>
											<Image src="/register.svg" alt="register"
												width={26}
												height={26}
												priority />
										</Link>
									</div>
								))
							}
							{" "} </div>
					</Collapse>
				</div>
			</div>
		</>
	);
}
