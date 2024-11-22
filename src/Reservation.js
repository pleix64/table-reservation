//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    Text,
    UnorderedList,
    ListItem,
    FormControl,
    FormErrorMessage,
 } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "yup-phone-lite";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { globals } from './globals'
import { genTimeSlot, genGroup, toDateString } from "./utils";

const timeLabels = [...Array(globals.NUM_SLOTS).keys()].map(genTimeSlot);

const Reservation = ({availableTimes, dispatch}) => {
    const [step, setStep] = useState(1);
    const [hold, setHold] = useState({
        date: "",
        slot: "",
        group: "",
    });
    const formikStep1 = useFormik({
        initialValues: {
            date: new Date(),
            slot: "",
            group: 2,
        },
        onSubmit: (values) => {
            console.log("Step 1 onSubmit is called.");
            console.log("print values: ", values);
            setHold({
                date: toDateString(values.date),
                slot: values.slot,
                group: values.group,
            });
            setStep(2);
        },
        validationSchema: Yup.object({
            date: null,
            slot: Yup.number().min(0, "Please select a time.").max(globals.NUM_SLOTS).required("Please select a time."),
            group: Yup.number().min(1).required("Please select number of people."),
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
            console.log("User Info Received:");
            console.log(values.firstName, " ", values.lastName);
            console.log(values.phoneNumber, " ", values.email);
            console.log(values.occasion);
            console.log(values.specialRequest);
            dispatch({
                type: 'reserve',
                date: hold.date,
                slot: parseInt(hold.slot),
                numTables: Math.floor(parseInt(hold.group) / 4) + 1,
            });
            setStep(3);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required."),
            lastName: Yup.string().required("Last name is required."),
            phoneNumber: Yup.string().phone("US", "Invalid phone number").required("Phone number is required."),
            email: Yup.string().email("Invalid email address.").required("Email address is required."),
        }),
    });

    useEffect(() =>{
        console.log(availableTimes);
    }, [availableTimes]);

    const navigate = useNavigate();

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
        {
          step === 1 ?
          <BookTime formik={formikStep1} availableTimes={availableTimes}/> : (
            step === 2 ?
            <DinerInfo formik={formikStep2} hold={hold}/> :
            <Confirmation
              firstName={formikStep2.values.firstName}
              lastName={formikStep2.values.lastName}
              phoneNumber={formikStep2.values.phoneNumber}
              email={formikStep2.values.email}
              date={formikStep1.values.date}
              slot={formikStep1.values.slot}
              group={formikStep1.values.group}
            />
          )
        }
        {step === 3 ?
            <Button
              type="button"
              variant="brandPrimary"
              onClick={() => navigate(-1)}
            >
                OK
            </Button> :
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
            </ButtonGroup>
        }
    </Box>
    );
};

const BookTime = ({formik, availableTimes}) => {
    return (<>
    <h1>Reserve a table</h1>
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
                        maxDate={addDays(new Date(), globals.NUM_DAYS - 1)}
                        selected={formik.values.date}
                        onChange={(val) => { formik.setFieldValue('date', new Date(val)); }}
                        showIcon
                        toggleCalendarOnIconClick
                    />
                </Box>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.slot && formik.errors.slot}>
                <Select
                    placeholder="Select time" {...formik.getFieldProps('slot')}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                >
                    {
                        [...Array(globals.NUM_SLOTS).keys()].map((x) => {
                            return (
                                <option
                                  key={timeLabels[x]}
                                  value={x}
                                  disabled={availableTimes[toDateString(formik.values.date)][x]<=0}
                                >
                                    {timeLabels[x]}
                                </option>
                            )
                        })
                    }
                </Select>
                <FormErrorMessage>{formik.errors.slot}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.group && formik.errors.group}>
                <Select
                    {...formik.getFieldProps('group')}
                    boxShadow="sm"
                    _hover={{ boxShadow: "md" }}
                >{
                    [...Array(11).keys()].map((x) => {
                        return (
                            <option key={genGroup(x + 1)} value={x + 1}>{genGroup(x + 1)}</option>
                        )
                    })
                }</Select>
                <FormErrorMessage>{formik.errors.group}</FormErrorMessage>
            </FormControl>
        </Stack>
    </Box>
    </>)
};

const DinerInfo = ({formik, hold}) => {
    return (
        <>
        <h1>You're almost done!</h1>
        <Stack gap={5} direction={{ base: "column", md: "row"}}>
            <Text>{hold.date}</Text>
            <Text>{timeLabels[hold.slot]}</Text>
            <Text>{genGroup(hold.group)}</Text>
        </Stack>
        <h2>Diner details</h2>
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

const Confirmation = (props) => {
    return (<>
        <Heading as="h1">Reservation Confirmation</Heading>
        <Text as="p">
            Dear {props.firstName} {props.lastName},
        </Text>
        <Text as="p">
        Thank you for choosing Little Lemon! We’re excited to host you. Below are the details of your reservation:
        </Text>
        <UnorderedList>
            <ListItem>Name: {props.firstName} {props.lastName}</ListItem>
            <ListItem>Date: {props.date.toString().slice(0,15)}</ListItem>
            <ListItem>Time: {timeLabels[props.slot]}</ListItem>
            <ListItem>Guests: {genGroup(props.group)}</ListItem>
            <ListItem>Location: Little Lemon, Chicago</ListItem>
        </UnorderedList>
        <Text as="p">
            Contact Information:
        </Text>
        <UnorderedList>
            <ListItem>Email: {props.email}</ListItem>
            <ListItem>Phone: {props.phoneNumber}</ListItem>
        </UnorderedList>
        <Text as="p">
            We have sent this confirmation to your email and will also send you a text reminder to your phone as your reservation approaches.
        </Text>
        <Text as="p">
            If you have any special requests or need to make changes to your booking, please contact us at info@littlelemonchicago.com or call us at (312) 555-6789.
        </Text>
        <Text as="p">
            We look forward to serving you soon!
        </Text>
        <Text as="p">
            Warm regards,
        </Text>
        <Text as="p">
            The Little Lemon Team
        </Text>
    </>)
};

export default Reservation;