const dotenv = require('dotenv')

dotenv.config()
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
})

const uploadImage = async (
    Image: string,
    folder: string,
    // transformation = null,
    tag = null
    // public_id?: string
) => {
    const options = {
        // public_id,
        tags: tag,
        folder: folder,
        use_filename: true,
        // unique_filename: false,
        // transformation,
        overwrite: false,
    }
    try {
        const result = await cloudinary.uploader.upload(Image, options)
        console.log(result)
        return result
    } catch (error) {
        return error
    }
}

const getAssetInfo = async (publicId: string) => {
    // Return colors in the response
    const options = {
        colors: true,
    }
    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId, options)
        console.log(result)
        return result.colors
    } catch (error) {
        console.error(error)
    }
}

const deleteImage = async (publicId: string) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId)
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}

const getImages = async (folder: string) => {
    try {
        const result = await cloudinary.search
            .expression(`folder:${folder}`)
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute()

        console.log(result.resources)
        const files = result.resources.map((file: any) => {
            return { public_id: file.filename, url: file.secure_url }
        })
        console.log(files[0].url)
        console.log('🔥🔥🔥🔥🔥🔥🔥', files[0].url.split('/').pop().split('.')[0])
        // return publicIds
    } catch (error) {
        console.error(error)
    }
}

export default {
    uploadImage,
    getAssetInfo,
    deleteImage,
    getImages,
}
