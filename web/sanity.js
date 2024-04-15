import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'nsh5gba9',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export async function fetchProducts(type, page, filters, sortBy) {
  try {
    let priceFilter = '';
    if (filters && filters.minPrice !== '' && filters.maxPrice !== '') {
      priceFilter = ` && price >= ${filters.minPrice} && price <= ${filters.maxPrice}`;
    }

    let discountFilter = '';
    if (filters && filters.hasDiscount) {
      discountFilter = ` && discount.hasDiscount == true`;
    }

    let sizeFilter = '';
    if (filters && filters.sizes && filters.sizes.length > 0) {
      const sizes = filters.sizes.map((size) => `${size} in size[]->RU`).join(' || ');
      sizeFilter = ` && (${sizes})`;
    }

    let colorFilter = '';
    if (filters && filters.colors && filters.colors.length > 0) {
      const colors = filters.colors.map((color) => `"${color}" in color[]->colorName`).join(' || ');
      colorFilter = ` && (${colors})`;
    }

    let styleFilter = '';
    if (filters && filters.styles && filters.styles.length > 0) {
      const styles = filters.styles.map((style) => `"${style}" in style[]->styleName`).join(' || ');
      styleFilter = ` && (${styles})`;
    }

    let lengthFilter = '';
    if (filters && filters.minVeilsLength !== '' && filters.maxVeilsLength !== '') {
      lengthFilter = ` && length >= ${filters.minVeilsLength} && length <= ${filters.maxVeilsLength}`;
    }

    let sortQuery = '';
    if (sortBy === 'priceMin') {
      sortQuery = 'order(price asc)';
    } else if (sortBy === 'priceMax') {
      sortQuery = 'order(price desc)';
    }

    const salesQuery =
      '_type in ["dresses", "dressesRental", "veils", "decorations", "shoes", "jackets", "handMade"] && discount.hasDiscount == true';
    const baseQuery = `_type == "${type}"`;

    const query = `
      *[${type === 'sales' ? salesQuery : baseQuery} && !(_id in path("drafts.**"))${priceFilter}${discountFilter}${sizeFilter}${colorFilter}${styleFilter}${lengthFilter}] | ${sortQuery}${type !== 'search' ? `[0...${page * 6}]` : ''} {
        _id,
        title,
        slug,
        img {
          images[]
        },
        price,
        discount {
          hasDiscount,
          discountPercentage,
          newPrice
        }
      }
    `;

    return await client.fetch(query);
  } catch (e) {
    return e;
  }
}

export async function fetchSearchProducts(filters, page, sortBy) {
  try {
    let priceFilter = '';
    if (filters && filters.minPrice !== '' && filters.maxPrice !== '') {
      priceFilter = ` && price >= ${filters.minPrice} && price <= ${filters.maxPrice}`;
    }

    let discountFilter = '';
    if (filters && filters.hasDiscount) {
      discountFilter = ` && discount.hasDiscount == true`;
    }

    let sizeFilter = '';
    if (filters && filters.sizes && filters.sizes.length > 0) {
      const sizes = filters.sizes.map((size) => `${size} in size[]->RU`).join(' || ');
      sizeFilter = ` && (${sizes})`;
    }

    let colorFilter = '';
    if (filters && filters.colors && filters.colors.length > 0) {
      const colors = filters.colors.map((color) => `"${color}" in color[]->colorName`).join(' || ');
      colorFilter = ` && (${colors})`;
    }

    let styleFilter = '';
    if (filters && filters.styles && filters.styles.length > 0) {
      const styles = filters.styles.map((style) => `"${style}" in style[]->styleName`).join(' || ');
      styleFilter = ` && (${styles})`;
    }

    let lengthFilter = '';
    if (filters && filters.minVeilsLength !== '' && filters.maxVeilsLength !== '') {
      lengthFilter = ` && length >= ${filters.minVeilsLength} && length <= ${filters.maxVeilsLength}`;
    }

    let sortQuery = '';
    if (sortBy === 'priceMin') {
      sortQuery = 'order(price asc)';
    } else if (sortBy === 'priceMax') {
      sortQuery = 'order(price desc)';
    }

    const query = `
      *[_type in ["dresses", "dressesRental", "veils", "decorations", "shoes", "jackets", "handMade"] && !(_id in path("drafts.**"))${priceFilter}${discountFilter}${sizeFilter}${colorFilter}${styleFilter}${lengthFilter}] | ${sortQuery} {
        _id,
        title,
        slug,
        img {
          images[]
        },
        price,
        discount {
          hasDiscount,
          discountPercentage,
          newPrice
        },
        _type
      }
    `;

    return await client.fetch(query);
  } catch (e) {
    return e;
  }
}

export async function fetchTotalProductsCount(type, filters) {
  try {
    let priceFilter = '';
    if (filters && filters.minPrice !== '' && filters.maxPrice !== '') {
      priceFilter = ` && price >= ${filters.minPrice} && price <= ${filters.maxPrice}`;
    }

    let discountFilter = '';
    if (filters && filters.hasDiscount) {
      discountFilter = ` && discount.hasDiscount == true`;
    }

    let sizeFilter = '';
    if (filters && filters.sizes && filters.sizes.length > 0) {
      const sizes = filters.sizes.map((size) => `${size} in size[]->RU`).join(' || ');
      sizeFilter = ` && (${sizes})`;
    }

    let colorFilter = '';
    if (filters && filters.colors && filters.colors.length > 0) {
      const colors = filters.colors.map((color) => `"${color}" in color[]->colorName`).join(' || ');
      colorFilter = ` && (${colors})`;
    }

    let styleFilter = '';
    if (filters && filters.styles && filters.styles.length > 0) {
      const styles = filters.styles.map((style) => `"${style}" in style[]->styleName`).join(' || ');
      styleFilter = ` && (${styles})`;
    }

    let lengthFilter = '';
    if (filters && filters.minVeilsLength !== '' && filters.maxVeilsLength !== '') {
      lengthFilter = ` && length >= ${filters.minVeilsLength} && length <= ${filters.maxVeilsLength}`;
    }

    const salesQuery =
      '_type in ["dresses", "dressesRental", "veils", "decorations", "shoes", "jackets", "handMade"] && discount.hasDiscount == true';
    const baseQuery = `_type == "${type}"`;

    const query = `
      count(*[${type === 'sales' ? salesQuery : baseQuery} && !(_id in path("drafts.**"))${priceFilter}${discountFilter}${sizeFilter}${colorFilter}${styleFilter}${lengthFilter}])
    `;

    return await client.fetch(query);
  } catch (e) {
    return e;
  }
}

export async function fetchTopProducts(type) {
  try {
    const topProductsQuery = `*[_type == "${type}"].products`;
    let productRefs = await client.fetch(topProductsQuery);
    productRefs = productRefs[0].map((obj) => obj._ref);

    const query = `*[_id in [${productRefs.map((ref) => `'${ref}'`)}]] {
        _id,
        title,
        slug,
        img {
          images[]
        },
        price,
        discount {
          hasDiscount,
          discountPercentage,
          newPrice
        },
        _type
      }
    `;

    return await client.fetch(query);
  } catch (e) {
    return e;
  }
}

export function urlFor(source) {
  return builder.image(source);
}

export async function fetchMinMaxPrice(type) {
  try {
    const allQuery = '_type in ["dresses", "dressesRental", "veils", "decorations", "shoes", "jackets", "handMade"]';
    const salesQuery =
      '_type in ["dresses", "dressesRental", "veils", "decorations", "shoes", "jackets", "handMade"] && discount.hasDiscount == true';
    const baseQuery = `_type == "${type}"`;

    // eslint-disable-next-line no-nested-ternary
    const query = `*[${type === 'sales' ? salesQuery : type === 'search' ? allQuery : baseQuery} && defined(price)] | order(price asc)`;

    const data = await client.fetch(query);

    if (type === 'search') {
      const tmp = data.filter((obj) =>
        obj.title.toLowerCase().includes(localStorage.getItem('searchQuery').toLowerCase()),
      );
      return { minPriceValue: tmp[0].price, maxPriceValue: tmp[tmp.length - 1].price };
    }

    return { minPriceValue: data[0].price, maxPriceValue: data[data.length - 1].price };
  } catch (e) {
    return e;
  }
}

export async function fetchMinMaxLength(type) {
  try {
    const query = `*[ _type == "${type}" && defined(length)] | order(length asc)`;

    const data = await client.fetch(query);

    return { minVeilsLengthValue: data[0].length, maxVeilsLengthValue: data[data.length - 1].length };
  } catch (e) {
    return e;
  }
}

export async function fetchSizes(type) {
  try {
    const query = `*[_type == ${type === 'dresses' || type === 'dressesRental' || type === 'jackets' ? '"clothingSizes"' : '"shoesSizes"'}]`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    return e;
  }
}

export async function fetchColors() {
  try {
    const query = `*[_type == "clothingColors"]`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    return e;
  }
}

export async function fetchStyles(category) {
  try {
    const query = `*[_type == ${category === 'dresses' ? '"clothingStyles"' : '"veilsStyles"'}]`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    return e;
  }
}

export async function fetchProduct(category, slug) {
  try {
    const query = `*[_type == "${category}" && slug.current == "${slug}"] {
      title,
      description,
      price,
      img {
        images[]
      },
      color[]-> {
        colorName,
        colorHEX
      },
      size[]-> {
        RU,
        INT
      },
      video,
      style[]-> {
        styleName
      },
      discount {
        hasDiscount,
        discountPercentage,
        newPrice
      }
    }`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    return e;
  }
}
