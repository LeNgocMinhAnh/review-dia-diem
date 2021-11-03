import axios from "axios";
import Search from "../components/search";
import { getCurrentUser } from "./user";

const request = axios.create({
  baseURL: "http://103.124.95.125:1506/v1",
  // baseURL: 'http://localhost:5000/v1',
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    return {
      status: error.response?.status || error.status,
      message: error.message?.data?.message || error.message,
    };
  }
);
request.interceptors.request.use(async (config) => {
  if (config.requireAuth) {
    const user = getCurrentUser();

    if (user) {
      const token = await user.getIdToken();
      config.headers.authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const setRequestToken = (token) => {
  return (request.defaults.headers.authorization = `Bearer ${token}`);
};

export const getRecentReview = () => {
  return request.get("/reviews");
};

export const getPlaceBySlug = (slug) => {
  return request.get("/places/" + slug);
};

export const getSummaryPlaceBySlug = (slug) => {
  return request.get(`/places/${slug}/summary`);
};

export const postReview = (id, data) => {
  return request.post(`/places/${id}/reviews`, data, { requireAuth: true });
};

export const uploadImages = (files) => {
  const formData = new FormData();
  files.map((file) => {
    formData.append("files", file);
  });
  return request.post("/media/uploads", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
    requireAuth: true,
  });
};

export const getPlaceBySearch = (search) => {
  return request.get("/places", { params: { search } });
};

export const getPlace = ({ search = "" }) => {
  return request.get("/places", {
    params: { search, limit: 100 },
    requireAuth: true,
  });
};

export const deletePlace = (id) => {
  return request.delete("/places", { params: { id }, requireAuth: true });
};

export const addPlace = (data) => {
  return request.post("/places", data, { requireAuth: true });
};

export const getUser = ({ search = "" }) => {
  return request.get("/user/list", { params: { search }, requireAuth: true });
};

export const getReport = () => {
  return request.get("/reports");
};

export const getReportTop = () => {
  return request.get("/reports/top");
};

export const upvote = (id, data) => {
  return request.post("/reviews/upvote", data, {
    params: { id },
    requireAuth: true,
  });
};
