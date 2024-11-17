import React, { useState } from "react";
//import React, { useState, useEffect } from "react";
import {
    Heading,
    Box,
    Button,
    ButtonGroup,
    Input,
    Select,
    Textarea,
    Flex,
    Grid,
    Stack,
    FormControl,
    FormErrorMessage,
 } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "yup-phone-lite";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const genTimeSlot = (num) => {
    return `${Math.floor(num / 2) + 5}:${num % 2 === 0 ? '00' : '30'} p.m.`;
};

const genGroup = (num) => {
    if(num===1) {
        return '1 person';
    } else if(num > 1 && num < 21) {
        return `${num} people`;
    } else {
        return 'Larger party';
    }
};

const Reservation = () => {
    const [step, setStep] = useState(1);
    const formikStep1 = useFormik({
        initialValues: {
            date: new Date(),
            time: "",
            group: "2 people",
        },
        onSubmit: (values) => {
            console.log("Step 1 onSubmit is called.");
            setStep(2);
        },
        validationSchema: Yup.object({
            date: null,
            time: Yup.string().required("Please select a time."),
            group: Yup.string().required("Please select number of people.")
        }),
        validateOnChange: true
    });
    const formikStep2 = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            occasion: "",
            specialRequest: "",
            // to be added:
            // checkbox consent to sign me up
            // checkbox consent to get text notifications
        },
        onSubmit: (values) => {
            console.log("Step 2 onSubmit is called.");
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required."),
            lastName: Yup.string().required("Last name is required."),
            phoneNumber: Yup.string().phone("US", "Invalid phone number").required("Phone number is required."),
            email: Yup.string().email("Invalid email address.").required("Email address is required."),
        }),
    });

    // useEffect(() =>{
    //     console.log("date: ", date);
    //     console.log("time: ", time);
    //     console.log("group: ", group);
    // }, [date, time, group]);

    return (
    <Box
      as="form"
      //borderWidth="1px"
      //rounded="lg"
      //shadow="1px 1px 3px rgba(0,0,0,0.3)"
      //bg="primary.700"
      borderRadius="xl"
      maxWidth={800}
      p={6}
      m="10px auto"
      onSubmit={step === 1 ? formikStep1.handleSubmit : formikStep2.handleSubmit}
    >
        {step === 1 ? <BookTime formik={formikStep1}/> : <DinerInfo formik={formikStep2}/>}
        <ButtonGroup w="100%" marginTop={3}>
                <Flex gap={1}>
                    <Button 
                      variant="brandSecondary"
                      disabled={step === 1} onClick={()=>setStep(1)}>Back</Button>
                    {step===1 ?
                      <Button type="submit" variant="brandSecondary">Next</Button> :
                      <Button type="submit" variant="brandPrimary">Complete reservation</Button>
                    }
                </Flex>
            {/* <Flex w="100%" justifyContent="space-between">
                <Flex>
                    <Button disabled={step === 1} onClick={()=>setStep(1)}>Back</Button>
                    <Button type="submit">Next</Button>
                </Flex>
                {step===2 ? (<Button>Complete reservation</Button>) : null}
            </Flex> */}
        </ButtonGroup>
    </Box>
    );
};

const BookTime = ({formik}) => {
    return (<>
    <Heading as="h1">Reserve a table</Heading>
    <Box>
        <Stack gap={5} direction={{ base: "column", md: "row"}}>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <Box
                  asChild
                  h="40px"
                  border="solid 1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  boxShadow="sm"
                  _hover={{ borderColor: "gray.300", boxShadow: "md" }}
                >
                    <DatePicker
                        id="date"
                        name="date"
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 10)}
                        selected={formik.values.date}
                        onChange={(val) => { formik.setFieldValue('date', Date.parse(val)); }}
                        showIcon
                        toggleCalendarOnIconClick
                    />
                </Box>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <Select
                    placeholder="Select time" {...formik.getFieldProps('time')}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                >
                    {
                        [...Array(10).keys()].map((x) => {
                            return (
                                <option key={x} value={genTimeSlot(x)} >{genTimeSlot(x)}</option>
                            )
                        })
                    }
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.group && formik.errors.group}>
                <Select
                    {...formik.getFieldProps('group')}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                >{
                    [...Array(21).keys()].map((x) => {
                        return (
                            <option key={x} value={genGroup(x + 1)}>{genGroup(x + 1)}</option>
                        )
                    })
                }</Select>
                <FormErrorMessage>{formik.errors.group}</FormErrorMessage>
            </FormControl>
        </Stack>
    </Box>
    </>)
};

const DinerInfo = ({formik}) => {
    return (
        <>
        <Heading as="h1">You's almost done!</Heading>
        <Grid
          gap={3}
          templateColumns={{ base: "100%", md: "repeat(2, 49%)" }}
          templateRows={{ base: "repeat(7, auto)", md: "repeat(5, auto)" }}
          templateAreas={{ base: `"firstName"
                                  "lastName"
                                  "phoneNumber"
                                  "email"
                                  "occasion"
                                  "specialRequest"
                                  "specialRequest"`,
                           md: `"firstName lastName"
                                "phoneNumber email"
                                "occasion null"
                                "specialRequest specialRequest"
                                "specialRequest specialRequest"` }}
        >
            <FormControl
                as="GridItem"
                gridArea="firstName"
                isInvalid={formik.touched.firstName && formik.errors.firstName}
            >
                <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    // the 3 lines above equavalent to the line bellow
                    //{...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              as="GridItem"
              gridArea="lastName"
              isInvalid={formik.touched.lastName && formik.errors.lastName}
            >
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  {...formik.getFieldProps('lastName')}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl
              as="GridItem"
              gridArea="phoneNumber"
              isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            >
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phone"
                  placeholder="Phone Number"
                  {...formik.getFieldProps('phoneNumber')}
                />
                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
            </FormControl>
            <FormControl
              as="GridItem"
              gridArea="email"
              isInvalid={formik.touched.email && formik.errors.email}
            >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              as="GridItem"
              gridArea="occasion"
              isInvalid={formik.touched.occasion && formik.errors.occasion}
            >
                <Select
                  id="occasion"
                  name="occasion"
                  placeholder="Select an occasion (optional)"
                  {...formik.getFieldProps('occasion')}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Date night">Date night</option>
                    <option value="Business meal">Business meal</option>
                    <option value="Celebration">Celebration</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <FormControl
              as="GridItem"
              gridArea="specialRequest"
              isInvalid={formik.touched.specialRequest && formik.errors.specialRequest}
            >
                <Textarea
                  id="specialRequest"
                  name="specialRequest"
                  placeholder="Add a special request (optional)"
                  {...formik.getFieldProps('specialRequest')}
                />
                <FormErrorMessage>{formik.errors.specialRequest}</FormErrorMessage>
            </FormControl>
        </Grid>
        </>
    )
};

export default Reservation;