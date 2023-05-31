import ProgressBar from "../components/ProgressBar";
import Link from "next/link";
import Logo from "../public/purpleLogo.svg";
import Image from "next/image";
import { React, useState } from "react";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProfileCreation() {
	const [counter, setCounter] = useState(0);

	const [identityT, setIdentityT] = useState(0);
	const [pronounT, setPronounT] = useState(0);
	const [genderT, setGenderT] = useState(0);

	const [tag, setTag] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [age, setAge] = useState("");
	const [pronoun, setPronoun] = useState("");
	const [gender, setGender] = useState("");
	const [preference, setPreference] = useState("");
	const [location, setLocation] = useState("");

	// const isName = name === "";
	// const isEmail = email === "";
	// const isPassoword = password === "";
	// const isAge = age === "";
	// const isPronoun = pronoun === "";
	// const isGender = gender === "";
	// const isPreference = preference === "";
	// const isLocation = location === "";
	// const isTag = tag === "";

	const [data, setData] = useState({
		name: "",
		age: 0.0,
		pronoun: "",
		gender: "",
		preference: "",
		location: "",
		interests: new Set(),
	});

	const handleTagSubmit = e => {
		e.preventDefault();
		if (data.interests.size < 6) {
			setData({ ...data, interests: new Set([...data.interests, tag]) });
			setTag("");
		}
	};

	const handleTagRemove = interest => {
		const interests = data.interests;
		interests.delete(interest);
		setData({ ...data, interests: interests });
	};

	const increase = () => {
		if (counter < 10) {
			setCounter(count => count + 1);
		}
	};
	const decrease = () => {
		if (counter > 0) {
			setCounter(count => count - 1);
		}
	};

	return (
		<div className='z-1 flex flex-col justify-center items-center w-screen h-screen'>
			<div className='absolute pb-[25%] w-1/4 flex justify-center items-center flex-col space-y-6'>
				<div className='w-1/2'>
					<Image
						src={Logo}
						alt='Landing'
						layout='responsive '
						className=''
					/>
				</div>
				<ProgressBar width={counter} />
			</div>
			<div className='relative flex justify-center flex-col items-center w-full space-y-4'>
				<>
					<div className='w-full flex justify-center'>
						{counter === 0 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ENTER YOUR NAME
									</div>
									<input
										type='text'
										className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
										value={name}
										onChange={e => setName(e.target.value)}
									/>
								</div>
							</>
						)}
						{counter === 1 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ENTER YOUR EMAIL
									</div>
									<input
										type='text'
										className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
							</>
						)}
						{counter === 2 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ENTER YOUR PASSWORD
									</div>
									<input
										type='text'
										className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
										value={password}
										onChange={e =>
											setPassword(e.target.value)
										}
									/>
								</div>
							</>
						)}

						{counter === 3 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ENTER YOUR AGE
									</div>
									<input
										type='number'
										className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
										value={age}
										onChange={e => setAge(e.target.value)}
									/>
								</div>
							</>
						)}

						{counter === 4 && (
							<>
								<div className='flex justify-center flex-col items-center w-5/12 '>
									<div className='text-novo-darkgray translate-y-0.5'>
										HOW DO YOU IDENTIFY?
									</div>
									<div className='space-x-4 text-md w-full flex justify-between py-4'>
										<button
											onClick={() => setIdentityT(1)}
											className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
												identityT === 1
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={gender}
											onChange={e =>
												setGender(e.target.value)
											}
										>
											MAN
										</button>
										<button
											onClick={() => setIdentityT(2)}
											className={`text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
												identityT === 2
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={gender}
											onChange={e =>
												setGender(e.target.value)
											}
										>
											WOMAN
										</button>
										<button
											onClick={() => setIdentityT(3)}
											className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
												identityT === 3
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={gender}
											onChange={e =>
												setGender(e.target.value)
											}
										>
											NON-BINARY
										</button>
									</div>
								</div>
							</>
						)}
						{counter === 5 && (
							<>
								<div className='flex justify-center flex-col items-center w-5/12 '>
									<div className='text-novo-darkgray translate-y-0.5'>
										WHAT ARE YOUR PRONOUNS?
									</div>
									<div className='space-x-4 text-md w-full flex justify-between py-4'>
										<button
											onClick={() => setPronounT(1)}
											className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
												pronounT === 1
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={pronoun}
											onChange={e =>
												setPronoun(e.target.value)
											}
										>
											HE/HIM
										</button>
										<button
											onClick={() => setPronounT(2)}
											className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
												pronounT === 2
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={pronoun}
											onChange={e =>
												setPronoun(e.target.value)
											}
										>
											SHE/HER
										</button>
										<button
											onClick={() => setPronounT(3)}
											className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
												pronounT === 3
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={pronoun}
											onChange={e =>
												setPronoun(e.target.value)
											}
										>
											THEY/THEM
										</button>
									</div>
								</div>
							</>
						)}
						{counter === 6 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ENTER YOUR LOCATION
									</div>
									<input
										type='text'
										className='bg-novo-gray w-full text-4xl py-4 px-3 text-center text-black focus:outline-none rounded-xl'
										value={location}
										onChange={e =>
											setLocation(e.target.value)
										}
									/>
								</div>
							</>
						)}
						{counter === 7 && (
							<>
								<div className='flex justify-center flex-col items-center w-5/12 '>
									<div className='text-novo-darkgray translate-y-0.5'>
										WHO DO YOU WANT TO SEE?
									</div>
									<div className='space-x-4 text-md w-full flex justify-between py-4'>
										<button
											onClick={() => setGenderT(1)}
											className={` text-novo-darkgray duration-300 hover:-translate-y-1 font-outfit text-center border rounded-full border-novo-darkgray py-3   w-1/3 ${
												genderT === 1
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={preference}
											onChange={e =>
												setPreference(e.target.value)
											}
										>
											MEN
										</button>
										<button
											onClick={() => setGenderT(2)}
											className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
												genderT === 2
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={preference}
											onChange={e =>
												setPreference(e.target.value)
											}
										>
											WOMEN
										</button>
										<button
											onClick={() => setGenderT(3)}
											className={`duration-300 hover:-translate-y-1 text-novo-darkgray font-outfit text-center border rounded-full border-novo-darkgray py-3  w-1/3 ${
												genderT === 3
													? "bg-novo-purple text-white border rounded-full border-novo-purple"
													: "bg-transparent"
											}`}
											value={preference}
											onChange={e =>
												setPreference(e.target.value)
											}
										>
											BOTH
										</button>
									</div>
								</div>
							</>
						)}
						{counter === 8 && (
							<>
								<div className='flex justify-center flex-col items-center w-5/12 '>
									<div className='text-novo-darkgray -translate-y-3.5 mb-[2%]'>
										ENTER 6 INTERESTS
									</div>
									<div className='w-full'>
										<div className='flex flex-col items-center w-full'>
											<div className='w-1/4 '>
												<form
													onSubmit={handleTagSubmit}
												>
													<input
														className='text-black pl-3 py-1 text-sm font-light  rounded-lg border-solid border border-beatdrop-grey bg-beatdrop-lightgrey w-fit'
														type='text'
														value={tag}
														onChange={e =>
															setTag(
																e.target.value
															)
														}
														placeholder='ADD TAG'
														name='first'
														autoComplete='off'
														maxLength={20}
													/>
												</form>
											</div>
											<div className=' w-full flex justify-center'>
												<Row className=' w-fit m-0 py-3'>
													{[...data.interests].map(
														(interest, index) => (
															<Col
																key={index}
																className='!max-w-fit p-1'
															>
																<div className=''>
																	<button className='text-novo-purple border-novo-purple px-3 bg-novo-lightpurple py-1 rounded-full flex justify-center items-center'>
																		{
																			interest
																		}
																		<FaTimes
																			className='hover:text-red-500 ml-2'
																			onClick={() =>
																				handleTagRemove(
																					interest
																				)
																			}
																		/>
																	</button>
																</div>
															</Col>
														)
													)}
												</Row>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
						{counter === 9 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ADD A PHOTO
									</div>
									<button
										type='text'
										className='border-dashed border-2 border-novo-lightgray w-full h-full text-xl font-light py-7 px-3 text-center text-[#B9B9B9] focus:outline-none rounded-xl'
									>
										UPLOAD FROM COMPUTER
									</button>
								</div>
							</>
						)}
						{counter === 10 && (
							<>
								<div className='flex justify-center flex-col items-center space-y-3 w-5/12 '>
									<div className='text-novo-darkgray'>
										ADD ACTIVITIES
									</div>
									<Link
										href='/activityFeed'
										className='border no-underline text-novo-darkgray  hover:bg-novo-purple hover:text-white border-novo-gray w-full h-full text-4xl py-4 px-3 text-center focus:outline-none rounded-xl'
									>
										CHOOSE 3 ACTIVITIES
									</Link>
								</div>{" "}
							</>
						)}
					</div>
				</>
				<div className='flex space-x-5 text-lg bottom-[35%] fixed -z-1'>
					{counter === 0 ? (
						<button
							onClick={decrease}
							className='text-gray-300 duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowLeft2 />
						</button>
					) : (
						<button
							onClick={decrease}
							className=' text-novo-darkgray duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowLeft2 />
						</button>
					)}

					{counter === 10 ? (
						<button
							onClick={increase}
							className='text-gray-300 duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowRight2 />
						</button>
					) : (
						<button
							onClick={increase}
							className=' text-novo-darkgray duration-300 hover:-translate-y-1 p-1'
						>
							<ImArrowRight2 />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
