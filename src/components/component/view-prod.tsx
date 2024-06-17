"use client";

import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/contexts/UserContext";
import { Textarea } from "../ui/textarea";
import { Rating } from "../ui/star";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export function ViewProd({ id }) {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  let {cart, setCart} = useAppContext();
  let [prodInCart, setProdInCart] = useState( cart.find((cartItem) => cartItem.product.id == id)!==undefined);
  // console.log("hedha test",cart.map((cartItem) => cartItem.product.id));
  // console.log("hedha test id ",id);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [ratingUpdated, setRatingUpdated] = useState(0);
  const [commentUpdated, setCommentUpdated] = useState("");

  const [myReview, setMyReview] = useState(null);
  const [addReviewDisabled, setAddReviewDisabled] = useState( myReview!=null );
  const [productReviews, setProductReviews] = useState([]);

 const {userDataContxt, setUserDataContxt} = useAppContext();


  useEffect(() => {
    console.log("cart tbadel");
    setProdInCart(cart.find((cartItem) => cartItem.product.id == id)!==undefined);
  }, [cart]);

  useEffect(() => {
    if (id) {

      axios.get(`${process.env.NEXT_PUBLIC_API}/products/detail/${id}`)
        .then(response => {
          setProduct(response.data.product);
          // console.log(response.data.product.reviews);
          // console.log(userDataContxt);
          // console.log("li l9aha: ",response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id));
          setMyReview(userDataContxt &&  response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id));
          setAddReviewDisabled(userDataContxt && response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id)!==undefined);
          setProductReviews(response.data.product.reviews);
          setRating(userDataContxt && response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id) ? response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id).rating : 0);
          setComment(userDataContxt && response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id) ? response.data.product.reviews.find((review) => review.user_details.id == userDataContxt.id).comment : "");
          
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });

        
      
        
    }
  }, [id]);

  const handleSubmitReview = async () => {
    if (rating != 0 && comment != ""){
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}products/review/create/`,{
        product_id: product.id,
        rating: rating,
        comment: comment
    }, { withCredentials: true });
    if (response.data.message == "review added successfully"){
      setMyReview({rating: rating, comment: comment});
      setAddReviewDisabled(true);
      //if i have a review replace it else add one 
      setProductReviews([...productReviews, response.data.review]);
    }

    }
    catch (error) {
        console.error('Failed to fetch user acrt:', error);
    }
    
    
    } else {
      alert("Please rate the product and write a review before submitting");
    
    }
    

}

  const handleAddToCart = async () => {
    if (userDataContxt == null) {
      router.push("/login");
      return;
      
    }
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}cart/add/`,{
      product_id: product.id,
      quantity: quantity
  }, { withCredentials: true });
  if (response.data.message == "Product added to cart"){
    setCart([...cart, {
      product: {
        id: product.id,
        product_name: product.product_name,
        product_price: product.product_price,
        product_photo: product.product_photo,
        product_description: product.product_description,
        product_brand: product.product_brand,
        product_category: product.product_category,
        product_model_id: product.product_model_id,
        product_quantity: product.product_quantity
      },
      quantity: quantity
    }]);
    setProdInCart(true);}
  }
  catch (error) {
      console.error('Failed to fetch user acrt:', error);
  } 
  
  
  
  }






  const handleDeleteReview = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}products/review/delete/${myReview.id}/`, { withCredentials: true })
      .then((response) => {

        if (response.data.message == "Review deleted successfully!"){
          setMyReview(null);
          setAddReviewDisabled(false);
          setProductReviews(productReviews.filter((review) => review.id !== myReview.id));
        }
        


      })
      .catch((error) => {
        console.error('Failed to delete review:', error);
      });
  };


  const handleUpdateReview = () => {

    axios.put(`${process.env.NEXT_PUBLIC_API}products/review/update/${myReview.id}/`,{
      rating:  ratingUpdated,
      comment: commentUpdated
    }, { withCredentials: true })
    .then((response) => {
      if (response.data.message == "Review updated successfully!"){
        setMyReview(response.data.review);
        setProductReviews(productReviews.map((review) => review.id == myReview.id ? response.data.review : review));
        setComment(commentUpdated);
        setRating(ratingUpdated);
      }
    })
    .catch((error) => {
      console.error('Failed to update review:', error);
    });




  }





  return (
    <>
      {product === null ? (
        <></>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 ">
            <div className="grid gap-4 md:gap-10 items-start">
              <div className="hidden md:flex items-start">
                <div className="grid gap-4">
                  <h1 className="font-bold text-3xl lg:text-4xl">{product.product_name}</h1>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{product.product_brand}</p>
                  </div>
                  

                  <div>
                  <div className="flex items-center gap-4">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }, (_, index) => (
                          <StarIcon
                            key={index}
                            className={`w-5 h-5 ${
                              index < product.reviews_average ? "fill-yellow-500" : "fill-muted stroke-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">({product.reviews_average} / 5)</div>
                  </div>
                  </div>

                  <div className="grid gap-4 text-sm leading-loose">
                <p>{product.product_description}</p>
              </div>

                  <div className="text-3xl font-bold text-blue-950 ">{product.product_price}</div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Look out for special offers...</p>
                  </div>
                  { !prodInCart && <div className="flex items-center gap-2">
                    <Label className="text-base" htmlFor="quantity">Quantity</Label>
                    <Select defaultValue={quantity.toString()} onValueChange={(newValue) => {
                      console.log(parseInt(newValue));
                      setQuantity(parseInt(newValue)); }} >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: product.product_quantity }, (_, index) => (
                          <SelectItem key={index} value={String(index + 1)}  >
                            {index + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-gray-500 dark:text-gray-400">({product.product_quantity} in stock)</span>
                  </div>}
                  <div className="flex gap-2">
                  {prodInCart ? 
                  <Button size="lg" variant="ghost" disabled>Added to Cart</Button> 
                    :
                  <Button size="lg" onClick={handleAddToCart} >Add to Cart</Button>
                  }



<Dialog  >
      <DialogTrigger asChild>
        {
          userDataContxt && userDataContxt!=null && userDataContxt!=undefined  &&
<Button size="lg" variant="outline" disabled={addReviewDisabled}>
                      
                      <StarIcon className="w-4 h-4 mr-2" />
                      Rate the product
                    </Button>
        }
      
      </DialogTrigger>

     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
          <DialogDescription>Share your thoughts and feedback with us.</DialogDescription>
        </DialogHeader>
       
       <h3 >Rate the product</h3>
       <Rating
                rating={rating}
                totalStars={5}
                size={30}
                variant="yellow"
                className="h-1"
                showText={false}
                disabled={false}
                onRatingChange={(rating) => setRating(rating)}
              />

         

        <div className="grid gap-4 py-4">
          <Textarea className="resize-none" maxLength={250} placeholder="Write your review here..." 
          onChange={(e) => setComment(e.target.value)}
          
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">0</span>
              /250 characters{"\n                      "}
            </p>
            <DialogClose asChild>
              <Button  onClick={handleSubmitReview}  >
                Submit Review
              </Button>
            </DialogClose>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>





                    
                    
                  </div>
                </div>
              </div>
              <Separator />
              { myReview!=null  && 
                <div>
                <h4 className="font-bold text-sm lg:text-xl mt-1">Your Review</h4>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                      key={index}
                      className={`w-5 h-5 ${
                        index < myReview.rating ? "fill-gray-900" : "fill-muted stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2">{myReview.comment}</p>
                {/* Add Delete and Update buttons */}
                <div className="flex justify-end gap-2 mt-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleDeleteReview}
                  >
                    Delete
                  </button>
                  

{/*  */}

<Dialog  >
      <DialogTrigger asChild>
      <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
      
      </DialogTrigger>

     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
          <DialogDescription>Share your thoughts and feedback with us.</DialogDescription>
        </DialogHeader>
       
       <h3 >Rate the product</h3>
       <Rating
                rating={rating}
                totalStars={5}
                size={30}
                variant="yellow"
                className="h-1"
                showText={false}
                disabled={false}
                onRatingChange={(rating) => setRatingUpdated(rating)}
              />

         

        <div className="grid gap-4 py-4">
          <Textarea className="resize-none" maxLength={250} placeholder="Write your review here..." 
          onChange={(e) => setCommentUpdated(e.target.value)}
          defaultValue={comment}
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">0</span>
              /250 characters{"\n                      "}
            </p>
            <DialogClose asChild>
              <Button  onClick={handleUpdateReview}  >
                update Review
              </Button>
            </DialogClose>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>


{/*  */}




                </div>
              </div>
              
              }
              



        {/* <div className="grid gap-4">
              
          <div>
          <Rating
                rating={3.5}
                totalStars={5}
                size={24}
                variant="yellow"
                className="h-1"
                showText={false}
                disabled={false}
              />
              <br />
            <Label htmlFor="review" className="text-base">
              Leave a Review
            </Label>
            
            <Textarea id="review" placeholder="Write your review here..." className="mt-2" />
          </div>
          <Button size="lg">Add Review</Button>
        </div> */}
              
            </div>
            <div className="grid gap-3 items-start">
              
              <div className="grid gap-4">
                <img
                  alt="Product Image"
                  className="aspect-square object-scale-down border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={600}
                  src={product.product_photo}
                  width={600}
                />
              </div>
            </div>
          </div>

          <Separator />

<div className="container max-w-6xl px-4 md:px-6 py-4 md:py-8 lg:py-12">
  <div className="grid gap-8">
    <div>
      <h2 className="text-3xl font-bold mt-0 mb-4">Customer Reviews</h2>
      {productReviews.length !== 0 ?(
        <div className="grid gap-6">
        {productReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                      key={index}
                      className={`w-5 h-5 ${
                        index < review.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{review.rating} / 5</span>
              </div>
              <div>
                <p>{review.comment}</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
              <Avatar className="h-9 w-9 cursor-pointer ">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>{review.user_details.username && review.user_details.username[0]}</AvatarFallback>
            </Avatar>
                <div>
                  <h4 className="font-semibold">{review.user_details.username}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Verified Buyer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>) : 
        <div>
        <p className="text-gray-500 dark:text-gray-400">No reviews yet. Be the first to review this product!</p>
        </div>
      }
    </div>
  </div>
</div>
        </>
      )}
    </>
  );
}



function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}



function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}