import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const bankDataSlice = createSlice({
  name: "bankData",
  initialState: {
    list: [
      {
        transactionDate: "2015-12-31",
        description: "All Purpose Spray",
        category: "Other Services",
        debit: 100.84,
        credit: null,
        id: 1,
      },
      {
        transactionDate: "2016-01-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 2,
      },
      {
        transactionDate: "2016-01-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 3,
      },
      {
        transactionDate: "2016-01-08",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 175.78,
        id: 4,
      },
      {
        transactionDate: "2016-01-10",
        description: "30th Century Fox",
        category: "Merchandise",
        debit: 20.98,
        credit: null,
        id: 5,
      },
      {
        transactionDate: "2016-01-10",
        description: "Human Broth",
        category: "Merchandise",
        debit: 68.85,
        credit: null,
        id: 6,
      },
      {
        transactionDate: "2016-01-11",
        description: "MomCorp",
        category: "Phone/Cable",
        debit: 66.55,
        credit: null,
        id: 7,
      },
      {
        transactionDate: "2016-01-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 8,
      },
      {
        transactionDate: "2016-01-13",
        description: "MomCorp",
        category: "Other",
        debit: 1.59,
        credit: null,
        id: 9,
      },
      {
        transactionDate: "2016-01-15",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 10,
      },
      {
        transactionDate: "2016-01-20",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 207.97,
        id: 11,
      },
      {
        transactionDate: "2016-01-22",
        description: "30th Century Fox",
        category: "Merchandise",
        debit: 113.24,
        credit: null,
        id: 12,
      },
      {
        transactionDate: "2016-01-25",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 113.24,
        id: 13,
      },
      {
        transactionDate: "2016-01-27",
        description: "30th Century Fox",
        category: "Merchandise",
        debit: 29.98,
        credit: null,
        id: 14,
      },
      {
        transactionDate: "2016-02-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 15,
      },
      {
        transactionDate: "2016-02-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 16,
      },
      {
        transactionDate: "2016-02-10",
        description: "Human Broth",
        category: "Merchandise",
        debit: 26.8,
        credit: null,
        id: 17,
      },
      {
        transactionDate: "2016-02-11",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 18,
      },
      {
        transactionDate: "2016-02-11",
        description: "MomCorp",
        category: "Phone/Cable",
        debit: 66.55,
        credit: null,
        id: 19,
      },
      {
        transactionDate: "2016-02-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 20,
      },
      {
        transactionDate: "2016-02-13",
        description: "MomCorp",
        category: "Other",
        debit: 2.6,
        credit: null,
        id: 21,
      },
      {
        transactionDate: "2016-02-17",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 265.86,
        id: 22,
      },
      {
        transactionDate: "2016-02-19",
        description: "30th Century Fox",
        category: "Merchandise",
        debit: 30.94,
        credit: null,
        id: 23,
      },
      {
        transactionDate: "2016-02-23",
        description: "30th Century Fox",
        category: "Merchandise",
        debit: 26.94,
        credit: null,
        id: 24,
      },
      {
        transactionDate: "2016-02-25",
        description: "Benderbräu",
        category: "Merchandise",
        debit: 6.99,
        credit: null,
        id: 25,
      },
      {
        transactionDate: "2016-03-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 26,
      },
      {
        transactionDate: "2016-03-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 27,
      },
      {
        transactionDate: "2016-03-11",
        description: "Benderbräu",
        category: "Merchandise",
        debit: 22.99,
        credit: null,
        id: 28,
      },
      {
        transactionDate: "2016-03-11",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 29,
      },
      {
        transactionDate: "2016-03-11",
        description: "MomCorp",
        category: "Phone/Cable",
        debit: 66.55,
        credit: null,
        id: 30,
      },
      {
        transactionDate: "2016-03-12",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 31,
      },
      {
        transactionDate: "2016-03-12",
        description: "MomCorp",
        category: "Other",
        debit: 1.74,
        credit: null,
        id: 32,
      },
      {
        transactionDate: "2016-03-14",
        description: "Benderbräu",
        category: "Merchandise",
        debit: 13.9,
        credit: null,
        id: 33,
      },
      {
        transactionDate: "2016-03-15",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 237.11,
        id: 34,
      },
      {
        transactionDate: "2016-03-19",
        description: "Benderbräu",
        category: "Merchandise",
        debit: 65.46,
        credit: null,
        id: 35,
      },
      {
        transactionDate: "2016-03-21",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 12.72,
        credit: null,
        id: 36,
      },
      {
        transactionDate: "2016-03-30",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 26.39,
        credit: null,
        id: 37,
      },
      {
        transactionDate: "2016-04-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 38,
      },
      {
        transactionDate: "2016-04-04",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 104.57,
        id: 39,
      },
      {
        transactionDate: "2016-04-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 40,
      },
      {
        transactionDate: "2016-04-11",
        description: "MomCorp",
        category: "Phone/Cable",
        debit: 66.55,
        credit: null,
        id: 41,
      },
      {
        transactionDate: "2016-04-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 42,
      },
      {
        transactionDate: "2016-04-15",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 43,
      },
      {
        transactionDate: "2016-04-16",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 27.85,
        credit: null,
        id: 44,
      },
      {
        transactionDate: "2016-04-22",
        description: "Human Broth",
        category: "Merchandise",
        debit: 137.79,
        credit: null,
        id: 45,
      },
      {
        transactionDate: "2016-04-26",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 357.13,
        id: 46,
      },
      {
        transactionDate: "2016-05-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 47,
      },
      {
        transactionDate: "2016-05-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 48,
      },
      {
        transactionDate: "2016-05-11",
        description: "MomCorp",
        category: "Phone/Cable",
        debit: 66.55,
        credit: null,
        id: 49,
      },
      {
        transactionDate: "2016-05-13",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 50,
      },
      {
        transactionDate: "2016-05-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 51,
      },
      {
        transactionDate: "2016-05-21",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 20.07,
        credit: null,
        id: 52,
      },
      {
        transactionDate: "2016-05-23",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 15.41,
        credit: null,
        id: 53,
      },
      {
        transactionDate: "2016-05-31",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 12.65,
        credit: null,
        id: 54,
      },
      {
        transactionDate: "2016-05-31",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 12.67,
        credit: null,
        id: 55,
      },
      {
        transactionDate: "2016-05-31",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 38.21,
        credit: null,
        id: 56,
      },
      {
        transactionDate: "2016-05-31",
        description: "Lightspeed Briefs",
        category: "Merchandise",
        debit: 44.51,
        credit: null,
        id: 57,
      },
      {
        transactionDate: "2016-06-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 58,
      },
      {
        transactionDate: "2016-06-03",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 335.01,
        id: 59,
      },
      {
        transactionDate: "2016-06-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 60,
      },
      {
        transactionDate: "2016-06-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 12.85,
        credit: null,
        id: 61,
      },
      {
        transactionDate: "2016-06-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 62,
      },
      {
        transactionDate: "2016-06-24",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 63,
      },
      {
        transactionDate: "2016-06-30",
        description: "Human Broth",
        category: "Merchandise",
        debit: 46.55,
        credit: null,
        id: 64,
      },
      {
        transactionDate: "2016-07-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 65,
      },
      {
        transactionDate: "2016-07-05",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 184.34,
        id: 66,
      },
      {
        transactionDate: "2016-07-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 67,
      },
      {
        transactionDate: "2016-07-07",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 10.99,
        credit: null,
        id: 68,
      },
      {
        transactionDate: "2016-07-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 69,
      },
      {
        transactionDate: "2016-07-22",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 70,
      },
      {
        transactionDate: "2016-07-25",
        description: "Stop-and-Drop Suicide Booth",
        category: "Merchandise",
        debit: 16.72,
        credit: null,
        id: 71,
      },
      {
        transactionDate: "2016-07-26",
        description: "Stop-and-Drop Suicide Booth",
        category: "Merchandise",
        debit: 35.29,
        credit: null,
        id: 72,
      },
      {
        transactionDate: "2016-08-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 73,
      },
      {
        transactionDate: "2016-08-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 74,
      },
      {
        transactionDate: "2016-08-06",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 2.54,
        credit: null,
        id: 75,
      },
      {
        transactionDate: "2016-08-06",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 10.91,
        credit: null,
        id: 76,
      },
      {
        transactionDate: "2016-08-06",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 262.88,
        id: 77,
      },
      {
        transactionDate: "2016-08-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 78,
      },
      {
        transactionDate: "2016-08-19",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 17.66,
        credit: null,
        id: 79,
      },
      {
        transactionDate: "2016-08-19",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 45,
        credit: null,
        id: 80,
      },
      {
        transactionDate: "2016-08-21",
        description: "Ronco Record Vault",
        category: "Merchandise",
        debit: 5,
        credit: null,
        id: 81,
      },
      {
        transactionDate: "2016-08-22",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 9.32,
        credit: null,
        id: 82,
      },
      {
        transactionDate: "2016-08-24",
        description: "Human Broth",
        category: "Dining",
        debit: 12.25,
        credit: null,
        id: 83,
      },
      {
        transactionDate: "2016-08-30",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 37.32,
        credit: null,
        id: 84,
      },
      {
        transactionDate: "2016-08-30",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 32.88,
        credit: null,
        id: 85,
      },
      {
        transactionDate: "2016-08-31",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 112.13,
        credit: null,
        id: 86,
      },
      {
        transactionDate: "2016-09-01",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 17.48,
        credit: null,
        id: 87,
      },
      {
        transactionDate: "2016-09-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 88,
      },
      {
        transactionDate: "2016-09-03",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 290.3,
        id: 89,
      },
      {
        transactionDate: "2016-09-05",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 8.29,
        credit: null,
        id: 90,
      },
      {
        transactionDate: "2016-09-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 91,
      },
      {
        transactionDate: "2016-09-06",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 7.19,
        credit: null,
        id: 92,
      },
      {
        transactionDate: "2016-09-06",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 15.79,
        credit: null,
        id: 93,
      },
      {
        transactionDate: "2016-09-07",
        description: "Stop-and-Drop Suicide Booth",
        category: "Merchandise",
        debit: 19.74,
        credit: null,
        id: 94,
      },
      {
        transactionDate: "2016-09-08",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 19.91,
        credit: null,
        id: 95,
      },
      {
        transactionDate: "2016-09-09",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 14.49,
        credit: null,
        id: 96,
      },
      {
        transactionDate: "2016-09-09",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 14.55,
        credit: null,
        id: 97,
      },
      {
        transactionDate: "2016-09-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 98,
      },
      {
        transactionDate: "2016-09-14",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 197.38,
        id: 99,
      },
      {
        transactionDate: "2016-09-15",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 7.15,
        credit: null,
        id: 100,
      },
      {
        transactionDate: "2016-09-15",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 12.17,
        credit: null,
        id: 101,
      },
      {
        transactionDate: "2016-09-16",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 15.97,
        credit: null,
        id: 102,
      },
      {
        transactionDate: "2016-09-16",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 40,
        credit: null,
        id: 103,
      },
      {
        transactionDate: "2016-09-16",
        description: "Planet Express",
        category: "Other Travel",
        debit: 214.14,
        credit: null,
        id: 104,
      },
      {
        transactionDate: "2016-09-17",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 9.81,
        credit: null,
        id: 105,
      },
      {
        transactionDate: "2016-09-17",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 27.43,
        credit: null,
        id: 106,
      },
      {
        transactionDate: "2016-09-19",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 45,
        credit: null,
        id: 107,
      },
      {
        transactionDate: "2016-09-19",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 32.63,
        credit: null,
        id: 108,
      },
      {
        transactionDate: "2016-09-20",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 12.8,
        credit: null,
        id: 109,
      },
      {
        transactionDate: "2016-09-22",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 5,
        credit: null,
        id: 110,
      },
      {
        transactionDate: "2016-09-22",
        description: "Good News",
        category: "Dining",
        debit: 9.49,
        credit: null,
        id: 111,
      },
      {
        transactionDate: "2016-09-22",
        description: "Zuban cigars",
        category: "Merchandise",
        debit: 5,
        credit: null,
        id: 112,
      },
      {
        transactionDate: "2016-09-23",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 20.43,
        credit: null,
        id: 113,
      },
      {
        transactionDate: "2016-09-24",
        description: "Froot Cup",
        category: "Dining",
        debit: 6.35,
        credit: null,
        id: 114,
      },
      {
        transactionDate: "2016-09-24",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 33.61,
        credit: null,
        id: 115,
      },
      {
        transactionDate: "2016-09-26",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 457.97,
        id: 116,
      },
      {
        transactionDate: "2016-09-28",
        description: "Froot Cup",
        category: "Dining",
        debit: 6.22,
        credit: null,
        id: 117,
      },
      {
        transactionDate: "2016-09-28",
        description: "Good News",
        category: "Dining",
        debit: 12.62,
        credit: null,
        id: 118,
      },
      {
        transactionDate: "2016-09-29",
        description: "Kibbles 'N' Snouts",
        category: "Dining",
        debit: 12.25,
        credit: null,
        id: 119,
      },
      {
        transactionDate: "2016-10-01",
        description: "Kibbles 'N' Snouts",
        category: "Dining",
        debit: 27.29,
        credit: null,
        id: 120,
      },
      {
        transactionDate: "2016-10-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 121,
      },
      {
        transactionDate: "2016-10-02",
        description: "Zuban cigars",
        category: "Merchandise",
        debit: 35.38,
        credit: null,
        id: 122,
      },
      {
        transactionDate: "2016-10-03",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 22.95,
        credit: null,
        id: 123,
      },
      {
        transactionDate: "2016-10-03",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 5,
        credit: null,
        id: 124,
      },
      {
        transactionDate: "2016-10-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 125,
      },
      {
        transactionDate: "2016-10-08",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 49.92,
        credit: null,
        id: 126,
      },
      {
        transactionDate: "2016-10-08",
        description: "All Purpose Spray",
        category: "Other Services",
        debit: 23,
        credit: null,
        id: 127,
      },
      {
        transactionDate: "2016-10-08",
        description: "Kibbles 'N' Snouts",
        category: "Dining",
        debit: 43.38,
        credit: null,
        id: 128,
      },
      {
        transactionDate: "2016-10-11",
        description: "Good News",
        category: "Dining",
        debit: 15.01,
        credit: null,
        id: 129,
      },
      {
        transactionDate: "2016-10-13",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 12.17,
        credit: null,
        id: 130,
      },
      {
        transactionDate: "2016-10-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 131,
      },
      {
        transactionDate: "2016-10-14",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 11.53,
        credit: null,
        id: 132,
      },
      {
        transactionDate: "2016-10-14",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 40,
        credit: null,
        id: 133,
      },
      {
        transactionDate: "2016-10-15",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 31.9,
        credit: null,
        id: 134,
      },
      {
        transactionDate: "2016-10-15",
        description: "Ronco Record Vault",
        category: "Merchandise",
        debit: 5,
        credit: null,
        id: 135,
      },
      {
        transactionDate: "2016-10-17",
        description: "Human Broth",
        category: "Dining",
        debit: 10.87,
        credit: null,
        id: 136,
      },
      {
        transactionDate: "2016-10-21",
        description: "All Purpose Spray",
        category: "Other Services",
        debit: 22,
        credit: null,
        id: 137,
      },
      {
        transactionDate: "2016-10-21",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 8.22,
        credit: null,
        id: 138,
      },
      {
        transactionDate: "2016-10-27",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 8.65,
        credit: null,
        id: 139,
      },
      {
        transactionDate: "2016-10-27",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 26.25,
        credit: null,
        id: 140,
      },
      {
        transactionDate: "2016-10-28",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 11.37,
        credit: null,
        id: 141,
      },
      {
        transactionDate: "2016-10-28",
        description: "Ronco Record Vault",
        category: "Merchandise",
        debit: 12,
        credit: null,
        id: 142,
      },
      {
        transactionDate: "2016-10-29",
        description: "Human Broth",
        category: "Dining",
        debit: 10.18,
        credit: null,
        id: 143,
      },
      {
        transactionDate: "2016-10-31",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 7.23,
        credit: null,
        id: 144,
      },
      {
        transactionDate: "2016-10-31",
        description: "Kibbles 'N' Snouts",
        category: "Dining",
        debit: 39.92,
        credit: null,
        id: 145,
      },
      {
        transactionDate: "2016-11-01",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 18.93,
        credit: null,
        id: 146,
      },
      {
        transactionDate: "2016-11-02",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 19.93,
        credit: null,
        id: 147,
      },
      {
        transactionDate: "2016-11-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 148,
      },
      {
        transactionDate: "2016-11-02",
        description: "Mom's Pecan Clusters",
        category: "Dining",
        debit: 12.17,
        credit: null,
        id: 149,
      },
      {
        transactionDate: "2016-11-05",
        description: "Good News",
        category: "Dining",
        debit: 53.63,
        credit: null,
        id: 150,
      },
      {
        transactionDate: "2016-11-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 151,
      },
      {
        transactionDate: "2016-11-06",
        description: "Good News",
        category: "Dining",
        debit: 34.31,
        credit: null,
        id: 152,
      },
      {
        transactionDate: "2016-11-06",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 34.51,
        credit: null,
        id: 153,
      },
      {
        transactionDate: "2016-11-07",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 22.17,
        credit: null,
        id: 154,
      },
      {
        transactionDate: "2016-11-07",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 200,
        id: 155,
      },
      {
        transactionDate: "2016-11-09",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 31.69,
        credit: null,
        id: 156,
      },
      {
        transactionDate: "2016-11-12",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 157,
      },
      {
        transactionDate: "2016-11-12",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 6.91,
        credit: null,
        id: 158,
      },
      {
        transactionDate: "2016-11-13",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 52.51,
        credit: null,
        id: 159,
      },
      {
        transactionDate: "2016-11-14",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 500,
        id: 160,
      },
      {
        transactionDate: "2016-11-18",
        description: "Cavitar Toothpaste",
        category: "Health Care",
        debit: 40,
        credit: null,
        id: 161,
      },
      {
        transactionDate: "2016-11-26",
        description: "Ronco Record Vault",
        category: "Merchandise",
        debit: 14.98,
        credit: null,
        id: 162,
      },
      {
        transactionDate: "2016-12-02",
        description: "Dr. FlimFlam's miracle cream",
        category: "Health Care",
        debit: 59.99,
        credit: null,
        id: 163,
      },
      {
        transactionDate: "2016-12-05",
        description: "Planet Express",
        category: "Other Services",
        debit: 14.95,
        credit: null,
        id: 164,
      },
      {
        transactionDate: "2016-12-08",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 67.41,
        credit: null,
        id: 165,
      },
      {
        transactionDate: "2016-12-08",
        description: "Planet Express",
        category: "Other Travel",
        debit: 12,
        credit: null,
        id: 166,
      },
      {
        transactionDate: "2016-12-09",
        description: "Planet Express",
        category: "Other Travel",
        debit: 12,
        credit: null,
        id: 167,
      },
      {
        transactionDate: "2016-12-10",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 17.96,
        credit: null,
        id: 168,
      },
      {
        transactionDate: "2016-12-10",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 36,
        credit: null,
        id: 169,
      },
      {
        transactionDate: "2016-12-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 170,
      },
      {
        transactionDate: "2016-12-13",
        description: "MomCorp",
        category: "Fee/Interest Charge",
        debit: 5,
        credit: null,
        id: 171,
      },
      {
        transactionDate: "2016-12-14",
        description: "MomCorp",
        category: "Payment/Credit",
        debit: null,
        credit: 630.35,
        id: 172,
      },
      {
        transactionDate: "2016-12-17",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 11.32,
        credit: null,
        id: 173,
      },
      {
        transactionDate: "2016-12-17",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 6.7,
        credit: null,
        id: 174,
      },
      {
        transactionDate: "2016-12-17",
        description: "Zuban cigars",
        category: "Merchandise",
        debit: 65.57,
        credit: null,
        id: 175,
      },
      {
        transactionDate: "2016-12-17",
        description: "Zuban cigars",
        category: "Merchandise",
        debit: 36.99,
        credit: null,
        id: 176,
      },
      {
        transactionDate: "2016-12-18",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 6.47,
        credit: null,
        id: 177,
      },
      {
        transactionDate: "2016-12-18",
        description: "Froot Cup",
        category: "Dining",
        debit: 11.09,
        credit: null,
        id: 178,
      },
      {
        transactionDate: "2016-12-18",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 20.88,
        credit: null,
        id: 179,
      },
      {
        transactionDate: "2016-12-18",
        description: "Hologram in Sauce",
        category: "Merchandise",
        debit: 18.97,
        credit: null,
        id: 180,
      },
      {
        transactionDate: "2016-12-18",
        description: "Zuban cigars",
        category: "Merchandise",
        debit: 69,
        credit: null,
        id: 181,
      },
      {
        transactionDate: "2016-12-19",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 17.35,
        credit: null,
        id: 182,
      },
      {
        transactionDate: "2016-12-23",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 183.87,
        credit: null,
        id: 183,
      },
      {
        transactionDate: "2016-12-23",
        description: "Ronco Record Vault",
        category: "Merchandise",
        debit: 85,
        credit: null,
        id: 184,
      },
      {
        transactionDate: "2016-12-24",
        description: "Mom's Old-Fashioned Robot Oil",
        category: "Gas/Automotive",
        debit: 38.27,
        credit: null,
        id: 185,
      },
      {
        transactionDate: "2016-12-29",
        description: "Admiral Crunch",
        category: "Merchandise",
        debit: 87.94,
        credit: null,
        id: 186,
      },
      {
        transactionDate: "2016-12-30",
        description: "Bachelor Chow",
        category: "Dining",
        debit: 7.41,
        credit: null,
        id: 187,
      },
    ],
    filteredList: [],
    selected: {},
    error: false,
    total: 0,
    page: 1,
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      const removedIds = action.payload;
      state.list = state.list.filter((item) => {
        return !removedIds.includes(item._id);
      });
    },
    update: (state, action) => {
      state.list = state.list.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
    },
    fetch: (state, action) => {
      state.list = [...action.payload.data];
      state.filteredList = state.list;
    },
    load: (state, action) => {
      state.filteredList = [...state.list];
    },
    filterData: (state, action) => {
      state.filteredList = [
        ...state.list.filter((item) =>
          item.description.toLowerCase().includes(action.payload)
        ),
      ];
    },
    filterDate: (state, action) => {
      if (action.payload.startDate && action.payload.endDate) {
        state.filteredList = [
          ...state.list.filter(
            (item) =>
              moment(item.transactionDate) >=
                moment(action.payload.startDate) &&
              moment(action.payload.endDate) >= moment(item.transactionDate)
          ),
        ];
      } else {
        state.filteredList = state.list;
      }
    },
    throwError: (state, action) => {
      state.error = action.payload;
    },
    get: (state, action) => {
      console.log(action);
      const list = [...state.list];
      const index = list.findIndex((x) => x.id === parseInt(action.payload));

      state.selected = state.list[index];
    },
    setUpdating: (state, action) => {
      state.updating = action.payload;
    },
    setUpdated: (state, action) => {
      state.updated = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    clearList: (state, action) => {
      state.list = [];
    },
  },
});

export const {
  add,
  remove,
  update,
  fetch,
  load,
  get,
  filterData,
  filterDate,
  throwError,
  setUpdating,
  setUpdated,
  changePage,
  clearList,
} = bankDataSlice.actions;

export const selectPage = (state) => state.page;
export const selectBankData = (state) => state.bankData.list;
export const selectedBankData = (state) => state.bankData.selected;
export const selectFilteredBankData = (state) => state.bankData.filteredList;

export default bankDataSlice.reducer;
